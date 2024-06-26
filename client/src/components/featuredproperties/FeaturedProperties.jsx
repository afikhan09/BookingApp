import React from "react";
import "./FeaturedProperties";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                starting from {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
