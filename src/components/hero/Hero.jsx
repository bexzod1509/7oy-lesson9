import React from "react";
import "./Hero.css";
import { FaAngleRight } from "react-icons/fa6";
function Hero() {
  return (
    <div className="b">
      <div className="container">
        <div className="b1">
          <p>
            Posted on <b>startup</b>
          </p>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <h2>
            By <b className="b2">James West</b> | May 23, 2022{" "}
          </h2>
          <h3>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </h3>
          <button>
            Read More <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
