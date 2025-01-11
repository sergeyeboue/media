import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/index";
import Skeleton from "./skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";

function UsersList() {
  const [dofetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, iscreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users); // get data user !

  useEffect(() => {
    dofetchUsers();
  }, [dofetchUsers]);

  //handle for add user !
  const handleAddUser = () => {
    doAddUser();
  };

  if (isLoadingUsers) {
    return <Skeleton times={5} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <h3>error...</h3>;
  }

  const renderedUsers = data.map((user) => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex felx-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {iscreatingUser ? (
          "creating user..."
        ) : (
          <Button onClick={handleAddUser}> + Add User</Button>
        )}
        {creatingUserError && "error creating user"}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
