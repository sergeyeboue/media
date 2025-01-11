import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk("users/removeUser", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);
  return user;
});
