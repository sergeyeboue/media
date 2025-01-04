import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/index";

function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users List 1</h2>
    </div>
  );
}

export default UsersList;
