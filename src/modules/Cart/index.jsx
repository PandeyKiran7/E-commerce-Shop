import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carts));
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCarts(updatedCart);
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCarts(updatedCart);
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    setCarts(updatedCart);
  };

  const getTotalPrice = () => {
    return carts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (!carts.length) return <div>Cart is empty</div>;

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10 bg-white rounded-lg">
          <div className="w-3/4 px-10 py-10">
            {/* Cart Header */}
            <div className="flex justify-between border-b pb-8">
              <h1 className="text-3xl font-semibold">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
            </div>

            {/* Product List Header */}
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-lg uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-gray-600 text-center text-lg uppercase w-1/5">Quantity</h3>
              <h3 className="font-semibold text-gray-600 text-center text-lg uppercase w-1/5">Price</h3>
              <h3 className="font-semibold text-gray-600 text-center text-lg uppercase w-1/5">Total</h3>
            </div>
            {carts.map((cart) => (
              <div key={cart.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 border-b">
                <div className="flex w-2/5">
                  {/* Product Image */}
                  <div className="w-20">
                    <img src={cart.image} alt={cart.title} className="h-24 rounded-md" />
                  </div>
                  {/* Product Details */}
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-lg">{cart.title}</span>
                    <span className="text-red-500 text-sm capitalize">{cart.category}</span>
                    <div
                      className="font-semibold hover:text-red-500 text-gray-500 text-sm cursor-pointer"
                      onClick={() => removeProduct(cart.id)}
                    >
                      Remove
                    </div>
                  </div>
                </div>
                {/* Quantity Controls */}
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => handleDec(cart.id)}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input
                    type="text"
                    value={cart.quantity}
                    readOnly
                    className="mx-2 border text-center w-8 rounded-md"
                  />
                  <svg
                    className="fill-current text-gray-600 w-4 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() => handleInc(cart.id)}
                  >
                    <path d="M432 256c0 13.255-10.745 24-24 24H272v136c0 13.255-10.745 24-24 24h-48c-13.255 0-24-10.745-24-24V280H40c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24h136V72c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24v112h136c13.255 0 24 10.745 24 24v48z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-lg">${cart.price}</span>
                <span className="text-center w-1/5 font-semibold text-lg">
                  ${(cart.price * cart.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link to={"/products"} className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current text-gray-600 w-3 mx-2 cursor-pointer" viewBox="0 0 448 512">
                <path d="M257.5 445.1c7.9-8 7.7-20.8-.3-28.6L122.9 288H424c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H122.9l134.3-128.5c8-7.7 8.2-20.6.3-28.6l-11.2-11.2c-7.7-7.7-20.3-7.9-28.2-.2L7 239c-9.4 9.4-9.4 24.6 0 33.9l210.9 210.8c7.9 7.7 20.5 7.5 28.2-.2l11.4-11.4z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div id="summary" className="w-1/4 px-8 py-10 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="font-semibold text-2xl border-b pb-4 mb-4">Order Summary</h1>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-sm uppercase">Items {carts.length}</span>
              <span className="font-semibold text-sm">${getTotalPrice()}</span>
            </div>

            <label htmlFor="" className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm border rounded-md">
              <option>Standard Shipping - $10.00</option>
              <option>Express Shipping - $20.00</option>
            </select>

            <div className="py-6">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full border rounded-md"
              />
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 mt-2 text-sm text-white uppercase rounded-md">
                Apply
              </button>
            </div>

            <div className="border-t mt-4 pt-4">
              <div className="flex font-semibold justify-between text-sm uppercase">
                <span>Total Cost</span>
                <span>${(parseFloat(getTotalPrice()) + 10).toFixed(2)}</span> {/* Add shipping cost here */}
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-md mt-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;