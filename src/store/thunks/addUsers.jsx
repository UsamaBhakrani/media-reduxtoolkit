import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUsers = createAsyncThunk("user/add", async () => {
  const request = await axios.post("http://localhost:5174/users", {
    name: faker.person.fullName(),
  });
  return request.data;
});

export { addUsers };
