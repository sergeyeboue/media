import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store/index";

function UsersListItem({ user }) {
  const [doRemoveUser, isRemovingUser, removeUserError] = useThunk(removeUser);

  const handleRemoveUser = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button loading={isRemovingUser} onClick={handleRemoveUser}>
            <GoTrashcan />
          </Button>
          {removeUserError && "error removing user"}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
