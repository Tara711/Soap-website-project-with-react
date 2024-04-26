import React from "react";
import { validateEmail } from "../../utilis";
import { useState } from "react";
import "./Contact.css";
import fin from "../../assets/finland-flag.jpg";
import contactbanner from "../../assets/Business Banner.jpg";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const getIsFormValid = () => {
    return firstName && validateEmail(email) && text;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    clearForm();
  };

  return (
    <div className="bg-green-400 ">
      <div className="">
        <img src={contactbanner} alt="" className="h-[32rem] w-full" />
      </div>

      <div className="contact">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h1 className="text-3xl text-center my-4 bg-green-700 p-4 rounded">
              Contact Us
            </h1>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First name"
              />
            </div>
            <div className="Field">
              <label>
                Last name <sup>*</sup>
              </label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Last name"
              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email address"
              />
            </div>
            <div className="Field">
              <label>
                Message<sup>*</sup>
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-sky-700"
              disabled={!getIsFormValid()}
            >
              Sent Message
            </button>
          </fieldset>
        </form>
      </div>
      <div className="locations bg-green-500 p-24">
        <center>
          <h1 className="text-3xl font-bold mb-6 ">Office Locations</h1>
        </center>
        <div className="location-details">
          <div>
            <img src={fin} alt="" className="location-img" />
            <h2>Rauma, Finland</h2>
            <h3>Satamakatu 26, 26100 </h3>
            <h4>Office : +358417568522 (Mon-Fri)</h4>
            <h4>Sales/Support : +35841759865258 (Mon-Fri) </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
