import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUsers } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUsers);

  const handleClick = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleClick} className="mr-3">
        <GoTrash />
      </Button>
      {error && <div>Error Deleting User</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
