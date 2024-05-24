import React from "react";
import "./Footer.css";
import social from "@/assets/social.png";
import Image from "next/image";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d">
          <div>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <Image src={social} alt="social" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
