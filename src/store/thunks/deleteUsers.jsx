import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUsers = createAsyncThunk("user/delete", async (user) => {
  await axios.delete(`http://localhost:5174/users/${user.id}`);
  return user
});

export { deleteUsers };
