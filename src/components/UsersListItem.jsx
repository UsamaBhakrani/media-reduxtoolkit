const UsersListItem = ({ user }) => {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 items-center justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
