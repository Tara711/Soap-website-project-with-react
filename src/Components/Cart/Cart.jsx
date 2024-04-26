import React, { useState, useEffect } from "react";

const Cart = ({ cart, flash }) => {
  const [update, setUpdate] = useState(0);
  const [flashClass, setFlashClass] = useState("");

  useEffect(() => {
    if (flash) {
      setFlashClass("flash-animation");
      setTimeout(() => {
        setFlashClass("");
      }, 1000);
    }
  }, [flash]);

  const buyProduct = () => {
    alert("Thank you for buying.");
    setUpdate(0);
  };

  return (
    <div className={`cart ${flashClass}`}>
      <h2 className="text-3xl text-black text-center my-4">Cart</h2>
      <div className="flex flex-wrap justify-center my-8">
        {cart.map((item) => (
          <div
            key={item.product.id}
            className={`max-w-xs rounded overflow-hidden shadow-lg m-4 ${flashClass}`}
          >
            <img
              className="w-full"
              src={item.product.imageUrl}
              alt={item.product.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.product.title}</div>
              <p>{`Rate : €${item.product.price} `}</p>
              <p className="text-gray-700 text-base">
                Quantity:
                <div className="flex justify-around items-center flex-row">
                  <button
                    onClick={() => setUpdate(update - 50)}
                    className="px-1 py-1 text-black text-3xl mx-1 bg-gray-200 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  {update}
                  <button
                    onClick={() => setUpdate(update + 50)}
                    className="px-1 py-1 text-black text-3xl mx-2 bg-gray-200 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </p>
              <p className="text-gray-700 text-base font-bold ">
                {`Total Price: €${(item.product.price * update).toFixed(2)}`}
              </p>
              <p className="text-gray-700 text-base font-bold">
                Total Price (including 26% VAT): €
                {(item.product.price * update * 1.26).toFixed(2)}
              </p>
            </div>
            <center>
              <button className="" onClick={buyProduct}>
                Buy Now
              </button>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
