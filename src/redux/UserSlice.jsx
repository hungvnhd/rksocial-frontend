import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: { key: "asdd" },
  },
  reducers: {
    setDataUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDataUser } = UserSlice.actions;

export default UserSlice.reducer;
