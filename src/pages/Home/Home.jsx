import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/header/Header";
import Featured from "../../components/navbar/featured/featured";
import Propertylist from "../../components/propertylist/Propertylist";
import FeaturedProperties from "../../components/featuredproperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">browse by property type</h1>
        <Propertylist />
        <h1 className="homeTitle">Home Guests Love</h1>

        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
