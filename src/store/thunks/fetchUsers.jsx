import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const request = await axios("http://localhost:5174/users");

  //DEVELOPMENT ONLY
  await pause(2000);
  return request.data;
});

//DEVELOPMENT ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
