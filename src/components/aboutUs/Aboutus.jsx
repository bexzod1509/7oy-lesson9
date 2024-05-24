import React from "react";
import "./Aboutus.css";
import Image from "next/image";
import hand from "@/assets/hand.png";
import people from "@/assets/people.png";
function Aboutus() {
  return (
    <div className="container">
      <div className="e">
        <div>
          <p>Our mision</p>
          <h1>Creating valuable content for creatives all around the world</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </h2>
        </div>
        <div>
          <p>Our Vision</p>
          <h1>A platform that empowers individuals to improve</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </h2>
        </div>
      </div>
      <div className="e1">
        <div>
          <p>Our team of creatives</p>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </h2>
        </div>
        <Image src={hand} alt="hand" />
      </div>
      <div className="e1">
        <Image src={people} alt="people" />
        <div>
          <p>Why we started this Blog</p>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
