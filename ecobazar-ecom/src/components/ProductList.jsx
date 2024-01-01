import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addToCart, addToWishlist, removeFromWishlist, removeFromCart } from '../redux/action';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Add more products as needed
  ];
  const cartState = useSelector(state => state.cart);
  const wishState = useSelector(state => state.wishlist);
  const [cart, setCart] = useState([])
  const [wish, setWish] = useState([])
  useEffect(() => {
    setCart(cartState)
    setWish(wishState)
  }, [cartState, wishState])
  
  return (
    <div>
      <h2>Product List</h2>
      <br/>
      <span>cart</span>
      {cart.length}
      <br/>
      <span>wish</span>
      {wish.length}
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist</button>
          <br/>
          <button onClick={() => dispatch(removeFromCart(product))}>remove to Cart</button>
          <button onClick={() => dispatch(removeFromWishlist(product))}>remove to Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;