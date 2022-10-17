import { createSlice } from "@reduxjs/toolkit";

export interface UserCart {
  name: string;
  userCartItems: {
    [id: string]: {
      quantity: number;
      price: number;
      photoURL: string;
    };
  };
}

const initialState: UserCart = {
  name: "",
  userCartItems: {},
};

export const userSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    setUserCart: (state, action) => {
      state.userCartItems = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setUserCart, setName } = userSlice.actions;
export default userSlice.reducer;
