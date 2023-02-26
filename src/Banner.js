import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.pinimg.com/originals/26/1e/fb/261efbd9203c7ab3297bae26990ac4e5.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">This is the test description</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
export default Banner;
