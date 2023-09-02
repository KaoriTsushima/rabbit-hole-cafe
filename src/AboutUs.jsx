import React from "react";
import Bear from "./img/mastar-bear.jpeg";
import Cat from "./img/staff-cat.jpeg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="mt-5">
      <h1>About us</h1>

      <div className="d-flex flex-column p-5">
        <div className="d-flex ">
          <img
            alt="master-bear"
            src={Bear}
            width={200}
            className="master-bear align-self-start"
          />
          <p className="master-comment">
            Hello!
            <br />
            I’m Bearista, who is a master of the Rabbit Hole Café! Our café is
            based on a home café bar. So when you visit here, let’s enjoy our
            café and chatting with us!
            <br />
            Also, we have two rabbits (Kinako & Sesame). If you want to play
            with them, feel free to ask me!
          </p>
        </div>
        <div className="d-flex justify-content-end gap-2">
          <div className="bubble-container">
            <div className="bubble">I'm waiting for your visit!</div>
            <div className="pointer"></div>
          </div>
          <img alt="staff-cat" src={Cat} width={100} className="staff-cat" />
        </div>
      </div>
    </div>
  );
}
