import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex === -1) {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    addCartCount: (state, action) => {
      const targetObject = state.find(obj => obj.id === action.payload.id);
      targetObject.count += 1;
    },
    removeCartCount: (state, action) => {
      const targetObject = state.find(obj => obj.id === action.payload.id);
      if(targetObject.count>1) {
        targetObject.count -= 1;
      }
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

export const { addToCart, removeFromCart, addCartCount, removeCartCount } = cartSlice.actions;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const { addCategory } = categorySlice.actions;

export const cartReducer = cartSlice.reducer;
export const wishlistReducer = wishlistSlice.reducer;
export const categoryReducer = categorySlice.reducer;
