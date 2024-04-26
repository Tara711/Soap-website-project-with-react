import React from "react";
import "./Why.css";
import discount from "../../assets/discount.jpg";
import support from "../../assets/support.jpg";
import verified from "../../assets/verified.jpg";
import like from "../../assets/like.jpg";
import fast from "../../assets/fast.jpg";
import money from "../../assets/387.jpg";

const Why = () => {
  const Offers = [
    {
      imgUrl: discount,
      title: "Save More",
      description: "Save more with the best deal and cashbacks",
    },
    {
      imgUrl: support,
      title: "Customer Support",
      description: "Multilingual customer support service",
    },
    {
      imgUrl: verified,
      title: "Safe & Secure",
      description: "100% safe and secure payments",
    },
    {
      imgUrl: like,
      title: "Trusted by Many",
      description: "Over 10,000 satisfied customer bookings and counting",
    },
    {
      imgUrl: fast,
      title: "Agile and Fast Working Style",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing eli",
    },
    {
      imgUrl: money,
      title: "30-Day Money-back Guarantee",
      description:
        "If you are not satisfied with our apps, we will return your money in first 30 days",
    },
  ];

  return (
    <div className="why-heading">
      <h2 className="why-head">Why Us</h2>
      <p className="why-para">
        Known for best class customer support & already trusted by many.
      </p>

      <div>
        <div className="flex flex-wrap justify-center my-8 ">
          <div className=" grid grid-cols-3 gap-8">
            {Offers.map((item, index) => (
              <div
                className="max-w-xs rounded overflow-hidden shadow-lg m-4 p-7"
                key={index}
              >
                <img
                  className="object-cover h-48 w-96"
                  src={item.imgUrl}
                  alt=""
                />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 rounded-lg  p-2  text-center ">
                    {item.title}
                  </div>
                  <p className="text-gray-700 text-center text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
