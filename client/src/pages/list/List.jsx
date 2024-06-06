import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );

  const handleclick = () => {
    reFetch();
  };
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
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}  `}</span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>options</label>
              <div className="lsoptions">
                <div className="lsoptionItem">
                  <span className="lsOptiontext">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    onChange={(e) => setMin(e.target.value)}
                    type="text"
                    className="lsoptioninput"
                  />
                </div>
                <div className="lsoptionItem">
                  <span className="lsOptiontext">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    onChange={(e) => setMax(e.target.value)}
                    type="text"
                    className="lsoptioninput"
                  />
                </div>
                <div className="lsoptionItem">
                  <span className="lsOptiontext">Adult</span>
                  <input
                    type="text"
                    className="lsoptioninput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsoptionItem">
                  <span className="lsOptiontext">children</span>
                  <input
                    type="text"
                    className="lsoptioninput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsoptionItem">
                  <span className="lsOptiontext">Room</span>
                  <input
                    type="text"
                    className="lsoptioninput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleclick}>Search</button>
          </div>
          <div className="listResults">
            {loading ? (
              "loading please wait"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
