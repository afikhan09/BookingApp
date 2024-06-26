import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />

      <div className="diDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp"> Free airport taxi</span>
        <span className="siSubtitle">
          studio apartment with air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          you can cancel later so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailstext">
          <span className="siPrice">{item.cheapestPrice}</span>
          <span className="siTaxop">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="sicheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
