import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUsers, deleteUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((error) => setLoadingUsersError(error))
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUsers())
      .unwrap()
      .catch((error) => setCreatingUserError(error))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) {
    return <Skeleton times={5} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return <div>Error Fetching Data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m2 text-xl">Users</h1>

        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
