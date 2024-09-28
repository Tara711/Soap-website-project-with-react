import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import CancelButton from "../../CancleButton/cancelButton";
import { removeItem,updateItemQuantity } from "../../redux/componentSlice";

const Cart = ({ flash ,smallIcon}) => {
  const [quantities, setQuantities] = useState({});
  const [flashClass, setFlashClass] = useState("");
  const dispatch = useDispatch();

  // Access the cart slice
  const cartState = useSelector((state) => state.cart);
  console.log("Cart State:", cartState);

  // Fallback to an empty array if items are not defined or not an array
  const items = Array.isArray(cartState?.items) 
  ? cartState.items.filter((item, index, self) => 
      index === self.findIndex((t) => t.id === item.id)
    ) 
  : [];

  // Handle flash effect
  useEffect(() => {
    if (flash) {
      setFlashClass("flash-animation");
      setTimeout(() => {
        setFlashClass("");
      }, 1000);
    }
  }, [flash]);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // Dispatch the action to remove the item with the given id
  };

  const handleQuantityChange = (id, delta) => {
    //using existing logic for redux
    if(delta === 1)
    {
      handleAddQuantity(id,delta)
    }
    if(delta ===-1)
    {
      handleRemoveQuantity(id,delta = 1)
    }

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) + delta, 0),
    }));
  };

  const setTotalPrice =(item) =>
  {
    return(item.quantity * item.price)
  }

  const setTotalPricewithVAT =(item) => 
  {
    return((item.quantity * item.price) +  (26*(item.quantity * item.price))/100)
  }

  const getQuantity = (item) => 
  {
    return (item.quantity)
  }

  const buyProduct = () => {
    alert("Thank you for buying.");
    setQuantities({});
  };

  //quantityCheck
  const handleAddQuantity = (id,amount) => 
  {
    dispatch(updateItemQuantity({id,quantity:amount,operation:'add'}))
  }

  const handleRemoveQuantity = (id,amount) => 
    {
      dispatch(updateItemQuantity({id,quantity:amount,operation:'remove'}))
    }

  return (
    <div className={`cart ${flashClass}`}>
      <h2 className="text-3xl text-black text-center my-4">Cart</h2>
      <div>
        <div className="flex flex-wrap justify-center my-8">
        {items.length > 0 ? (
          items.map((item) => {
            // Safeguard to ensure item exists
            if (!item) return null; 

            const { id, title, price, imageUrl } = item; // Destructure item directly

            return (
              <div >
               {smallIcon? <CancelButton onClick={() => handleRemoveItem(item.id)}/> : null}
              <div
              key={id}
              className={`rounded overflow-hidden shadow-lg m-4 ${flashClass} ${smallIcon ? 'custom-small-icon-class' : 'max-w-xs'}`}
            >
              <img className={`w-full ${smallIcon ? 'custom-small-icon-image' : ''}`} src={imageUrl} alt={title} />
              <div className={`px-4 py-2 ${smallIcon ? 'text-sm' : ''}`}>
                <div className={`font-bold mb-1 ${smallIcon ? 'text-base' : 'text-xl'}`}>{title}</div>
                <p className={`${smallIcon ? 'text-xs' : 'text-base'}`}>{`Rate: €${price}`}</p>
                <div className={`text-gray-700 ${smallIcon ? 'text-xs' : 'text-base'}`}>
                  Quantity:
                  <div className="flex justify-around items-center flex-row">
                    <button
                      onClick={() => handleQuantityChange(id, -1)}
                      className={`px-1 py-1 text-black text-lg mx-1 bg-gray-200 rounded-md hover:bg-gray-400 ${smallIcon ? 'text-sm-custom' : 'text-3xl'}`}
                    >
                      -
                    </button>
                    {getQuantity(item)}
                    <button
                      onClick={() => handleQuantityChange(id, 1)}
                      className={`px-1 py-1 text-black text-lg mx-2 bg-gray-200 rounded-md hover:bg-gray-400 ${smallIcon ? 'text-sm-custom-plus' : 'text-3xl'}`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className={`font-bold ${smallIcon ? 'text-xs' : 'text-base'}`}>{`Total Price: €${setTotalPrice(item)}`}</p>
                <p className={`font-bold ${smallIcon ? 'text-xs' : 'text-base'}`}>{`Total Price (including 26% VAT): €${setTotalPricewithVAT(item)}`}</p>
              </div>
              <center>
                <button className={`px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 ${smallIcon ? 'text-xs' : ''}`} onClick={buyProduct}>
                  Buy Now
                </button>
                <button className={`px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 ${smallIcon ? 'text-xs' : ''}`} onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </center>
            </div>
            </div>
            );
          })
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Cart;
