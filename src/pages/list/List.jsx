import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";

const List = () => {
  const location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="Listcontainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination </label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>check in date </label>
              <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}  `}</span>
            </div>
          </div>
          <div className="listResults"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
