import React from "react";
import "./Products.css";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";
import Image from "next/image";
async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=3");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function Products() {
  const data = await getData();
  let Products = data?.products.map((el) => (
    <div key={el.id} className="c2">
      <Image src={el.images[0]} alt={el.title} width={405} height={318} />
      <p>
        By <b>John Doe</b> l Aug 23, 2021{" "}
      </p>
      <h1> {el.title} </h1>
      <h2>{el.description}</h2>
    </div>
  ));
  return (
    <div className="container">
      <div className="c">
        <h4>Popular blogs</h4>
        <div className="c1">{Products}</div>
      </div>
      <div className="c3">
        <h1>Choose A Catagory</h1>
        <div className="c4">
          <div className="c5">
            <Image src={icon1} alt="img" />
            <h2>Business</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div style={{ padding: "46px" }} className="c5">
            <Image src={icon2} alt="img" />
            <h2>Startup</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="c5">
            <Image src={icon3} alt="img" />
            <h2>Economy</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="c5">
            <Image src={icon4} alt="img" />
            <h2>Technology</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
