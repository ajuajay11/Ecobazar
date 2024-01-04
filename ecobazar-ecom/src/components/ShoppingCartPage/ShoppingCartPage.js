import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist, removeFromWishlist, removeFromCart, addCartCount, removeCartCount } from '../../redux/action';

const ShoppingCartPage = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cart);
    const wishState = useSelector(state => state.wishlist);
    const [cart, setCart] = useState([])
    const [wish, setWish] = useState([])
    // const [total, setTotal] = useState()
    useEffect(() => {
        setCart(cartState);
        setWish(wishState);
        // handleTotal();
    }, [cartState, wishState])

    const handleTotal=()=>{
        return (cart.reduce((accumulator, currentValue) => (accumulator + Number(currentValue.price.replace(/\$/g, "")) * currentValue.count),0)).toFixed(2);
    }
  return (
    <div>My Shopping Cart
        <div>
        
        <div >
            <table id="shoppingcart">
                <tbody>
                    {cart.map((cart, i) =>(
                        <tr key={i} tableborder="1px">
                            <td>{cart.id}</td>
                            <td>{cart.price}</td>
                            <td><span onClick={()=>dispatch(addCartCount(cart))}>+</span></td>
                            <td>{cart.count}</td>
                            <td><span onClick={()=>dispatch(removeCartCount(cart))}>-</span></td>
                            <td>${(Number(cart.price.replace(/\$/g, "")) * cart.count).toFixed(2)}</td>
                            <td onClick={()=>dispatch(removeFromCart(cart))}>X</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </div>

        <div>
            <div>sub total: <span>{handleTotal()}</span></div>
            <div>shipping: free</div>
            <div>Total: <span>{handleTotal()}</span></div>
        </div>
    </div>
  )
}

export default ShoppingCartPage