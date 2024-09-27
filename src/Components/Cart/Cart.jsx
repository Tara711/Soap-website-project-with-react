import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = ({ flash }) => {
  const [quantities, setQuantities] = useState({});
  const [flashClass, setFlashClass] = useState("");

  // Access the cart slice
  const cartState = useSelector((state) => state.cart);
  console.log("Cart State:", cartState);

  // Fallback to an empty array if items are not defined or not an array
  const items = Array.isArray(cartState?.items) ? cartState.items : [];
  const section = cartState ? cartState.section : 'default';

  // Handle flash effect
  useEffect(() => {
    if (flash) {
      setFlashClass("flash-animation");
      setTimeout(() => {
        setFlashClass("");
      }, 1000);
    }
  }, [flash]);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) + delta, 0),
    }));
  };

  const buyProduct = () => {
    alert("Thank you for buying.");
    setQuantities({});
  };

  return (
    <div className={`cart ${flashClass}`}>
      <h2 className="text-3xl text-black text-center my-4">Cart</h2>
      <div className="flex flex-wrap justify-center my-8">
        {items.length > 0 ? (
          items.map((item) => {
            // Safeguard to ensure item exists
            if (!item) return null; 

            const { id, title, price, imageUrl } = item; // Destructure item directly
            const quantity = quantities[id] || 0; // Use the id directly
            const totalPrice = (price * quantity).toFixed(2);
            const totalWithVAT = (price * quantity * 1.26).toFixed(2);

            return (
              <div key={id} className={`max-w-xs rounded overflow-hidden shadow-lg m-4 ${flashClass}`}>
                <img className="w-full" src={imageUrl} alt={title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p>{`Rate: €${price}`}</p>
                  <p className="text-gray-700 text-base">
                    Quantity:
                    <div className="flex justify-around items-center flex-row">
                      <button onClick={() => handleQuantityChange(id, -1)} className="px-1 py-1 text-black text-3xl mx-1 bg-gray-200 rounded-md hover:bg-gray-400">-</button>
                      {quantity}
                      <button onClick={() => handleQuantityChange(id, 1)} className="px-1 py-1 text-black text-3xl mx-2 bg-gray-200 rounded-md hover:bg-gray-400">+</button>
                    </div>
                  </p>
                  <p className="text-gray-700 text-base font-bold">{`Total Price: €${totalPrice}`}</p>
                  <p className="text-gray-700 text-base font-bold">{`Total Price (including 26% VAT): €${totalWithVAT}`}</p>
                </div>
                <center>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={buyProduct}>
                    Buy Now
                  </button>
                </center>
              </div>
            );
          })
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
