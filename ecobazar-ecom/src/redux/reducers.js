// const cartReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return [...state, action.payload];
//       case 'REMOVE_FROM_CART':
//         return state.filter(item => item.id !== action.payload);
//       default:
//         return state;
//     }
//   };
  
//   const wishlistReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'ADD_TO_WISHLIST':
//         return [...state, action.payload];
//       case 'REMOVE_FROM_WISHLIST':
//         return state.filter(item => item.id !== action.payload);
//       default:
//         return state;
//     }
//   };

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex === -1) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
        
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex === -1) {
        state.push(action.payload);
      }
      
    },
    removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});



const categorySlice = createSlice({
  name: 'category',
  initialState: '',
  reducers: {
    addCategory: (state, action) => {
      return action.payload;
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const { addCategory } = categorySlice.actions;

export const cartReducer = cartSlice.reducer;
export const wishlistReducer = wishlistSlice.reducer;
export const categoryReducer = categorySlice.reducer;
