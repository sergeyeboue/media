import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // DEV only
  await pause(2000);

  return response.data;
});

// DEV only
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // function pause for testing loading state
