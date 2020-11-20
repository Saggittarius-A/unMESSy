import React from "react";
//import "./card.css"


//Card Start-------
function Card(props) {
  return (
    
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={props.imgURL} alt="not found"/>
  <h1>{props.heading}</h1>
    </div>
    <div class="flip-card-back">
  
      <button>Choose</button>
    </div>
  </div>
</div>
 
  );
};

export default Card;