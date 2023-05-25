import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userrrr",
  initialState: {
    user: null,
    // value: "what is up??",
  }, // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    // payload data astai from 1 component to another dase soch oka
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// by useSelctor we get the information from redux store....aghe ke che sa store v agha pa aghe component ke use koly shu da pa through. e.g. get user from the redux store..da selectUser mng useSelector hook ta pass ku
export const selectUser = (state) => state.userx.user;
// export const selectUser2 = (state) => state.userx.value;

export default userSlice.reducer;
