import React from "react";
import "./Hero.css";
import HeroPicture from "../../assets/profile.jpg";
import Newsletter from "../Newsletter/Newsletter";
import Product from "../Product/Product";

const Hero = () => {
  return (
    <div>
      <div className="Herosection">
        <div className="herocontent">
          <h1 className="text-4xl mb-7 text-green-900">
            Harmony Honey Beauty Bar
          </h1>
          <h1 className="herohead">“Nature’s Kiss for Your Skin!” 🌿</h1>
          <p>
            "Harmony Honey Beauty Bar" is more than just a name; it's a symphony
            of simplicity and sophistication that resonates with every use.
            <br />
            "Harmony" captures the essence of balance and tranquility, promising
            a soap that works in perfect harmony with your skin's natural
            rhythms.
            <br />
            "Honey" infuses the name with a touch of sweetness and nourishment.
            It evokes images of golden richness and natural healing, reminding
            us of the age-old wisdom behind this timeless ingredient.
            <br />
            "Beauty Bar" elevates the soap to a realm of elegance and
            sophistication. It transforms a simple cleansing product into a
            lavish essential in your skincare routine, promising not just
            cleanliness, but a tangible sense of beauty and self-care. <br />
            Together, these words create a tapestry of imagery: of serene
            moments, of indulgent self-care, and of skin that glows with
            vitality. "Harmony Honey Beauty Bar" isn't just a name—it's a
            promise. A promise of simplicity and sophistication, of sweetness
            and nourishment, and above all, of beauty and bliss with every use.
          </p>
          <button
            className="herobutton"
            type="submit"
            onClick={() => <Product />}
          >
            Buy Now
          </button>
        </div>
        <div>
          <img src={HeroPicture} alt="" className="heropicture" />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Hero;
