import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  extraReducers(builder) {
    //reducer pour recuperer les users
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    //reducer pour add user
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    //reducer pour remove user
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload.id);
    });
  },
});

export const usersReducer = usersSlice.reducer;
