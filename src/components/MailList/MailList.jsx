import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time save money</h1>
      <span className="mailDesc">
        Sign up and we will send the best deals to you
      </span>
      <div className="mailinputcontainer">
        <input type="text" placeholder="your email" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
