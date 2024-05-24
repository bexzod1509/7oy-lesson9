import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="f">
        <h1>Account</h1>
        <form action="">
          <input required type="text" defaultValue={"Abdulaziz"} />
          <input required type="text" defaultValue={"Programmer"} />
          <input required type="text" defaultValue={"abdulazizprogrammer"} />
          <input required type="text" defaultValue={"Password"} />
          <input required type="text" defaultValue={"Confirm password"} />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
