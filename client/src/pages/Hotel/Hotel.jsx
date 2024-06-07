import React, { useContext, useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/MailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { searchContext } from "../../context/searchContext";

const Hotel = () => {
  const location = useLocation();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/hotels/find/${id}`
  );

  const { date, options } = useContext(searchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date[0].endDate, date[0].startDate);

  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
  //   },
  // ];

  const handleMove = (direction) => {
    let newsliderNumber;
    if (direction === "l") {
      newsliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newsliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newsliderNumber);
  };

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      {loading ? (
        "loading pls wait"
      ) : (
        <>
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img
                    // src={photos[slideNumber].src}
                    src={data.photos[slideNumber]}
                    alt=""
                    className="sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or book now</button>
              <h1 className="hoteTitel">{data.name}</h1>
              <div className="hotelAddress">
                <h3>logo</h3>
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                excellent location - {data.distance}m from center
              </span>
              <span className="hotelPriceHighLight">
                book a stay over ${data.cheapestPrice} at this property and get
                a free airport taxi
              </span>
              <div className="hotelImages">
                {/* {photos.map((photo, i) => ( */}
                {data.photos?.map((photo, i) => (
                  <div className="hotelImgWrapper">
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailstext">
                  <h1 className="hotelTitle">{data.title + "hshs"}</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>perfect for a {days} night stay</h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae id at blanditiis culpa fuga?
                  </span>
                  <h2>
                    <b>${days * data.cheapestPrice * options.room}</b> ({days}
                    nights)
                  </h2>
                  <button>Reserve or book now</button>
                </div>
              </div>
              <MailList />
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hotel;
