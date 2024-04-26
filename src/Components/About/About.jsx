import React from "react";
import cover from "../../assets/Cover Photo.jpg";
import item1 from "../../assets/handmade-soap-4926844_1280.jpg";
import item2 from "../../assets/IMG_0019.png";
import item3 from "../../assets/Sudha.jpg";
import item4 from "../../assets/sarada.jpg";
import item5 from "../../assets/choyan.jpg";

const About = () => {
  const photos = [
    {
      imageUrl: item1,
      name: "Sarbad Ansari",
      role: "Leader",
    },
    {
      imageUrl: item2,
      name: "Tara Prasad Shrestha",
      role: "Member",
    },
    {
      imageUrl: item3,
      name: "Sudha Giri",
      role: "Member",
    },
    {
      imageUrl: item4,
      name: "Sarada Surya Ale Magar",
      role: "Member",
    },
    {
      imageUrl: item5,
      name: "Choyan Barua",
      role: "Member",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl text-center mt-20">Know Everything about us</h1>
      <p className="text-2xl text-center my-20">
        "Embrace Nature's Essence: Pure, Handcrafted Soap for Your Skin's
        Delight."
      </p>
      <img src={cover} alt="" className="w-full h-2/3" />
      <div>
        <p className="my-10 p-10">
          Hoitolatukku, Finland's largest professional cosmetics department
          store, offers a wide selection of professional products, equipment,
          and furniture for care entrepreneurs. Established in 1985, the family
          business specializes in selling care products, furniture, and
          equipment. They provide quick delivery and are constantly expanding
          their product range. The store has 25 employees and emergency helpers
          during busy times. The widest product selection in the nursing
          industry is available directly from the warehouse. Hoitolatukku is
          open weekdays from 8 a.m. to 4 p.m. and offers sales exhibitions and
          pick-up wholesale. Orders should be made in advance through the online
          store or customer service. For larger purchases or extensive product
          presentations, appointments can be made in advance.
        </p>
        <h1 className="text-3xl text-center">Company mission Statement</h1>
        <p className="text-center p-8">
          "At Suomen Hoitolatukku are dedicated, to delivering high quality
          beauty products and exceptional services to beauty industry businesses
          and professionals across Finland. Our goal is to boost our client’s
          success and profitability by providing solutions, dependable
          assistance and outstanding customer care." Objectives The main aim of
          this company is to create a marketing mix plan for the successful
          launch of a new range of premium soaps under a fresh brand name
          focusing on the growing business to consumer (B2C) sector, in Finland.
          This plan is designed to seize market opportunities increase brand
          recognition and foster sales growth for Suomen Hoitolatukku within the
          beauty industry.
        </p>
        <div>
          <h1 className="text-3xl text-center my-20">Group Members</h1>
          <div>
            <div className="flex flex-wrap justify-center my-8 ">
              <div className=" grid grid-cols-3 gap-8">
                {photos.map((item, index) => (
                  <div
                    className="max-w-xs rounded overflow-hidden shadow-lg m-4 h-full"
                    key={index}
                  >
                    <div className="relative h-64">
                      <img
                        className="absolute h-full w-full object-cover"
                        src={item.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 rounded-lg shadow-md p-2 border text-center ">
                        {item.name}
                      </div>
                      <p className="text-gray-700 text-center text-base">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
