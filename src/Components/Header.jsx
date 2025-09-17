import React from "react";
import "./Header.css"
import Background from "../assets/background.jpeg"
export default function Header () {
    return (
        <>
 <div className="header">
    <h1>Welcome to Our Cinema</h1>
    <p>Where stories come alive on the big screen — grab your popcorn and enjoy the show!</p>     
     <div className="buttons">
      {/* <button class="btn btn-blue z-1">Get Started!</button> */}
      <button className="btn btn-blue z-1" 
       onClick={() => document.getElementById("Films").scrollIntoView({ behavior: "smooth" })}>
        Get Started!
    </button>
    </div> 
  </div>
        </>
    )
}
