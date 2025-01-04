import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/index";
import Skeleton from "./skeleton";

function UsersList() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={6} />;
  }

  if (error) {
    return <h3>error...</h3>;
  }

  return (
    <div>
      <h3>Users List</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
