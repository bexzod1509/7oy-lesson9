import React from "react";
import "./Navbar.css";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="a">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <div className="a1">
            <div className="a2">
              <Link href={"/"}>Home</Link>
              <Link href={"/category"}>Blog</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/account"}>Register</Link>
            </div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
