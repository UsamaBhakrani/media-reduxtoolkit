import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUsers = createAsyncThunk("delete/user", async (userId) => {
  const request = await axios.delete(`http://localhost:5174/users/${userId}`);
  return;
});

export { deleteUsers };
