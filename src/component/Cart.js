import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-lg w-20"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <RestaurantItemList items={cartItems} />
        {cartItems.length === 0 ? <h3>Cart is empty.Please add items.</h3> : ""}
      </div>
    </div>
  );
};

export default Cart;
