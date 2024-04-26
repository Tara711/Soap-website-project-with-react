import React from "react";
import "./Service.css";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import Why from "../Why/Why";
import cover from "../../assets/Banner.jpg";

const Services = () => {
  const services = [
    {
      icon: <IoSettingsOutline />,
      title: "Corporate Solution",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus sint exercitationem asperiores doloremque, velit expedita eius maxime blanditiis doloribus?",
    },
    {
      icon: <IoMdDownload />,
      title: "Account Receivable",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deleniti iusto voluptate minima officia, in dolores vero vel at cum!",
    },
    {
      icon: <MdAddCall />,
      title: "Call Settings",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, architecto laudantium nobis facere animi provident alias libero eos magni nam quam, sed est recusandae. Esse.",
    },
  ];

  return (
    <div>
      <div className="text-left  service-head">
        <img src={cover} alt="" className="w-full h-[32rem]" />
      </div>

      <div>
        <h1 className="text-3xl text-center my-12">Our Services</h1>
        <div className="flex flex-wrap justify-center my-8 mb-20 ">
          <div className="justify-around text-center grid grid-cols-3 ">
            {services.map((item, index) => (
              <div
                className="max-w-xs rounded overflow-hidden shadow-lg m-4 p-7"
                key={index}
              >
                <div className="relative h-20">
                  <div className="absolute h-full w-full object-cover flex justify-center text-center text-6xl text-blue-900">
                    {item.icon}
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Why />
    </div>
  );
};

export default Services;
