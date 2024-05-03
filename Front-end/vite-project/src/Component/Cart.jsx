
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [subtotal, setSubtotal] = useState(120);
  const [shipping, setShipping] = useState("Calculated at the next step");
  const [total, setTotal] = useState(subtotal);
  const navigate = useNavigate();

  const handleRemoveItem = () => {
    // Logic to remove an item from the cart
  };

  const handleCheckout = () => {
    // Logic to proceed with the checkout
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="mx-4 md:mx-10 my-10 mt-[10vh]">
      {/* Top Section */}
      <div>
        <h1 className="font-bold text-2xl flex justify-center items-center">Your Cart</h1>
        <p>Now ready to checkout? Continue Shopping</p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          {/* Items 1 */}
          <div className="flex gap-6 items-center">
            <div className="w-48 h-48 bg-black">
              <img src="pp4.jpeg" alt="" className="w-full h-full" />
            </div>

            <div className="w-11/12">
              <h1 className="font-bold text-xl">Indian Chiffon</h1>
              <span>Size L</span>

              <div className="flex justify-between items-center">
                <span>Quantity 1</span>
                <span>Vendor Name</span>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">$99</h1>
                <button
                  className="text-red-500"
                  onClick={handleRemoveItem}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <hr />

          {/* Second Item */}
          <div className="flex gap-6 items-center">
            <div className="w-48 h-48 bg-black">
              <img src="pp6.jpeg" alt="" className="w-full h-full" />
            </div>

            <div className="w-11/12">
              <h1 className="font-bold text-xl">Indian Chiffon</h1>
              <span>Size L</span>

              <div className="flex justify-between items-center">
                <span>Quantity 1</span>
                <span>Vendor Name</span>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">$99</h1>
                <button
                  className="text-red-500"
                  onClick={handleRemoveItem}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping}</span>
          </div>

          <hr />

          <div className="flex justify-between">
            <span>Total</span>
            <span>{total}</span>
          </div>

          <button
            className="px-12 font-bold text-white mt-4 md:mt-10 py-4 bg-red-700"
            onClick={handleCheckout}
          >
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;