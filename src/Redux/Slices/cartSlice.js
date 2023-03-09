import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartlist: [],
  },
reducers: {
    addtocart(state, action) {
      return {
        cartlist: [
          ...state.cartlist,
          { ...action.payload, amount: 1, total: action.payload.price },
        ],
      };
    },
    removefromcart(state, action) {
      const filteredPeople = state.cartlist.filter(
        (item) => item.id !== action.payload
      );
      return {
        cartlist: [...filteredPeople],
      };
    },
    increasecartitemamount(state, action) {
      console.log("hello");
      state.cartlist.forEach((item) => {
        if (item.id === action.payload) {
          item.amount++;
          item.total = item.price * item.amount;
        }
      });
      return {
        cartlist: [...state.cartlist],
      };
    },
    decreasecartitemamount(state, action) {
      state.cartlist.forEach((item) => {
        if (item.id === action.payload) {
          item.amount = item.amount - 1;
          item.total = item.price * item.amount;
        }
      });
      return {
        cartlist: [...state.cartlist],
      };
    },
  },
});

export const {
  addtocart,
  removefromcart,
  increasecartitemamount,
  decreasecartitemamount,
} = cartSlice.actions;
export default cartSlice.reducer;
