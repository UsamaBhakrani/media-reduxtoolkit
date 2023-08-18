import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUsers = createAsyncThunk("user/delete", async (user) => {
  const request = await axios.delete(`http://localhost:5174/users/${user.id}`);
  return request.data
});

export { deleteUsers };
