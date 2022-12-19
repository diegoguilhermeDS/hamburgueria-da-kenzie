import React from "react";

const imgLogo: string = require("../../assets/img/BurguerKenzie.png")

function Logo() {
  return <img src={imgLogo} alt="image_logo" className="logo" />;
}

export default Logo;
