import React from "react";
import "./Newsletter.css";
import herbal from "../../assets/soap-5145054_1280.jpg";

const Newsletter = () => {
  return (
    <div className="newscontainer">
      <div>
        <img src={herbal} alt="" className="herbal" />
      </div>
      <div>
        <h1 className="newheading">
          Locally Prepared. <br />
          Proudly Served.
        </h1>
      </div>
    </div>
  );
};

export default Newsletter;
