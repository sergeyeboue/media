import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/index";
import Skeleton from "./skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

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

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={5} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <h3>error...</h3>;
  } else {
    content = data.map((user) => <UsersListItem key={user.id} user={user} />);
  }

  return (
    <div>
      <div className="flex felx-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={iscreatingUser} onClick={handleAddUser}>
          + Add User
        </Button>
        {creatingUserError && "error creating user"}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
