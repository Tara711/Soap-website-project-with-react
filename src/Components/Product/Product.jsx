import React, { useState } from "react";
import item1 from "../../assets/handmade-soap-4926844_1280.jpg";
import item2 from "../../assets/handmade-soap-4926848_1280.jpg";
import item3 from "../../assets/herbal.png";
import item4 from "../../assets/options.jpg";
import item5 from "../../assets/soap-4017608_1280.jpg";
import item6 from "../../assets/soap-4020270_1280.jpg";
import item7 from "../../assets/soap-4307709_1280.jpg";
import item8 from "../../assets/soap-5145054_1280.jpg";
import item9 from "../../assets/soap-9238_1280.jpg";
import { FaShoppingCart } from "react-icons/fa";
import {addItem, setSection}  from '../../redux/componentSlice'
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";

const Product = () => {
  const [cart, setCart] = useState([]);
  const [flash, setFlash] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { product }]);
    }
    dispatch(addItem(product))
    setFlash(true);
  };

  const HandleClick = (productId) => 
  {
    dispatch(setSection(productId))
  }

  const items = [
    {
      id: 1,
      imageUrl: item1, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 2,
      imageUrl: item2, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 3,
      imageUrl: item3, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 4,
      imageUrl: item4, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 5,
      imageUrl: item5, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 6,
      imageUrl: item6, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 7,
      imageUrl: item7, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 8,
      imageUrl: item8, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
    {
      id: 9,
      imageUrl: item9, // Use the imported image
      title: "Olive Oil Soap",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda.",
      country: "Nepal",
      price: 5,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-black text-center my-4">Our Products</h1>
      <div className="flex flex-wrap justify-center my-8 ">
        <div className="justify-around text-center grid grid-cols-3">
          {items.map((item) => (
            <div
              className={`max-w-xs rounded overflow-hidden shadow-lg m-4 ${
                flash ? "flash-animation" : ""
              }`}
              key={item.id}
            >
              <div className="relative h-64">
                <img
                  className="absolute h-full w-full object-cover"
                  src={item.imageUrl}
                  alt=""
                />{" "}
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
                <p className="text-gray-700 text-base">
                  Made in {item.country}
                </p>
                <p className="text-gray-700 text-base">Price: €{item.price}</p>
                <div className="">
                  <FaShoppingCart 
                    className="bg-blue-600 float-end hover:bg-blue-800 text-white p-4 rounded-full h-fit w-fit text-2xl cursor-pointer"
                    onClick={() => {HandleClick(item.id); addToCart(item)}}
                  />
                </div>   
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
