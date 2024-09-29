import React from "react";
import { useDispatch,useSelector } from "react-redux";

const TotalPriceCalculation = () => {


    const dispatch = useDispatch();

    const cartState = useSelector((state) => state.cart);
    
    const items = Array.isArray(cartState?.items) 
  ? cartState.items.filter((item, index, self) => 
      index === self.findIndex((t) => t.id === item.id)
    ) 
  : [];


    const TotalPriceCalculationLogic = (items) => {
        if (!Array.isArray(items) || items.length === 0) {
          return [0, 0]; // Return 0 for both if no items
        }
      
        return items.reduce(
          (acc, item) => {
            const total = acc[0] + (item.price * item.quantity); // Add totalPrice for this item
            const totalVAT = acc[1] + (item.price * item.quantity * 1.26); // Add totalWithVAT for this item
            return [total, totalVAT]; // Accumulate both
          },
          [0, 0] // Initial values for total and totalWithVAT
        );
    };
      
    const [totalPrice, totalPriceWithVAT] = TotalPriceCalculationLogic(items);

    const TotalPriceCalculationDiv =() => {
        return (
        <div>
          <p>Total = {totalPrice}</p>
          <p>Total with VAT = {totalPriceWithVAT} </p>
        </div>)
    } 



    return(<>
            {TotalPriceCalculationDiv(items)}
    </>)

}

export default TotalPriceCalculation;