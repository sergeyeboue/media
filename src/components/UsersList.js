import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/index";
import Skeleton from "./skeleton";
import Button from "./Button";

function UsersList() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [iscreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users); // get data user !

  useEffect(() => {
    setIsLoadingUsers(true);

    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setLoadingUsersError(err))
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]);

  //handle for add user !
  const handleAddUser = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
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
