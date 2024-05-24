import React from "react";
import "./Blog.css";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import blogbusiness from "@/assets/blogbusiness.png";
import blogwoman from "@/assets/blogwoman.png";
function Blog() {
  return (
    <>
      <div className="d1">
        <h1>Business</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <Image src={blogbusiness} alt="blogbusiness" />
      </div>
      <div className="d2 container">
        <input type="search" placeholder="Searching ..." />
      </div>
      <div className="d3">
        <Image src={blogwoman} alt="blogwoman" />
        <div>
          <p>Business</p>
          <h1>Top 6 free website mockup tools 2022</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec.
          </h2>
        </div>
      </div>
      <div className="d3">
        <Image src={blogwoman} alt="blogwoman" />
        <div>
          <p>Business</p>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec.
          </h2>
        </div>
      </div>
      <div className="d3">
        <Image src={blogwoman} alt="blogwoman" />
        <div>
          <p>Business</p>
          <h1>Ten free foogle fonts that you should use</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec.
          </h2>
        </div>
      </div>
      <div className="d3">
        <Image src={blogwoman} alt="blogwoman" />
        <div>
          <p>Business</p>
          <h1>What did I learn from doing 50+ design sprints?</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec.
          </h2>
        </div>
      </div>
      <div className="d4">
        <p>
          <b>
            <FaAngleLeft /> Prev
          </b>
          1 2 ... 10 Next <FaAngleRight />
        </p>
      </div>
    </>
  );
}

export default Blog;
