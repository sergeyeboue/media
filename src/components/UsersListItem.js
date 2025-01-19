import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store/index";
import ExpendablePanel from "./ExpendablePanel";
import AlbumList from "./AlbumList";

function UsersListItem({ user }) {
  const [doRemoveUser, isRemovingUser, removeUserError] = useThunk(removeUser);

  const handleRemoveUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        loading={isRemovingUser}
        onClick={handleRemoveUser}
      >
        <GoTrashcan />
      </Button>

      {removeUserError && "error removing user"}
      {user.name}
    </>
  );

  return (
    <ExpendablePanel header={header}>
      <AlbumList user={user} />
    </ExpendablePanel>
  );
}

export default UsersListItem;
