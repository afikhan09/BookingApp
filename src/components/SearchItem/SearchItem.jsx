import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        alt=""
        className="siImg"
      />

      <div className="diDesc">
        <h1 className="siTitle">Tower street apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp"> Free airport taxi</span>
        <span className="siSubtitle">
          studio apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio + 1 bathroom + 21 m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          you can cancel later so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailstext">
          <span className="siPrice">133</span>
          <span className="siTaxop">Includes taxes and fees</span>
          <button className="sicheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
