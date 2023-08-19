import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUsers } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUsers);

  const handleClick = () => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 items-center justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button loading={isLoading} onClick={handleClick} className="mr-3">
            <GoTrash />
          </Button>
          {error && <div>Error Deleting User</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
