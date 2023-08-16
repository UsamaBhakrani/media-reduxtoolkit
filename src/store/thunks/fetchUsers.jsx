import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const request = await axios("http://localhost:5174/users");
  return request.data;
});

export { fetchUsers };
