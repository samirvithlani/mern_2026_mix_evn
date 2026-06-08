import React from "react";
import "../assets/css/loader.css"

export const Loader = () => {
  return (
    <div className="loader-container">
    <div class="wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>
    </div>
  );
};
