import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart');
export const removeFromCart = createAction('cart/removeFromCart');

export const addCartCount = createAction('cart/addCartCount');
export const removeCartCount = createAction('cart/removeCartCount');

export const addToWishlist = createAction('wishlist/addToWishlist');
export const removeFromWishlist = createAction('wishlist/removeFromWishlist');

export const addCategory = createAction('category/addCategory');