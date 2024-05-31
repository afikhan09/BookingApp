import React, { useState } from "react";
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

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    },
  ];

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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now</button>
          <h1 className="hoteTitel">Grand hotel</h1>
          <div className="hotelAddress">
            <h3>logo</h3>
            <span>Elton St 125 new york</span>
          </div>
          <span className="hotelDistance">
            excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailstext">
              <h1 className="hotelTitle">stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                impedit odit vero maxime quod. Animi est ipsa magni cupiditate
                corporis temporibus cum esse eveniet. Maxime distinctio sed
                libero numquam eaque quibusdam corrupti fuga ratione assumenda
                ea. Vitae iste unde, dolor, voluptate aut perspiciatis quos
                explicabo nulla repellat odio iusto dicta.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>perfect for a 9 night stay</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                id at blanditiis culpa fuga?
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or book now</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
