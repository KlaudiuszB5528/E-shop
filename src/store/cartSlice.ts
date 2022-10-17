import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Cart {
  items: {
    [id: string]: {
      quantity: number;
      price: number;
      photoURL: string;
    };
  };
  totalQuantity: number;
  totalPrice: number;
}

export interface Item {
  id: string;
  price: number;
  photoURL: string;
}

const initialState: Cart = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const { id, price, photoURL } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity++;
      } else {
        state.items[id] = {
          quantity: 1,
          price,
          photoURL,
        };
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (!state.items[id]) return;
      if (state.items[id].quantity === 1) delete state.items[id];
      else state.items[id].quantity--;
    },
    calcTotalQuantity: (state) => {
      state.totalQuantity = Object.values(state.items).reduce(
        (acc, cur) => acc + cur.quantity,
        0
      );
    },
    calcTotalPrice: (state) => {
      state.totalPrice = Object.values(state.items).reduce(
        (acc, cur) => acc + cur.quantity * cur.price,
        0
      );
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  calcTotalQuantity,
  calcTotalPrice,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
