import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";

function UsersListItem({ user }) {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
