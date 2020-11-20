import React, { Component } from 'react';
import ViewCard from "./Card"

class Portfolio extends Component {
  render() {
    return (
      <>
      <div className="row">
          <div className="column">
            <ViewCard imgURL="https://i.ibb.co/v3LVJBr/eiliv-sonas-aceron-u-Am1-CZMd-PCw-unsplash.jpg" heading={"BREAKFAST"}/>
          </div>
          <div className="column">
            <ViewCard imgURL="https://i.ibb.co/v3LVJBr/eiliv-sonas-aceron-u-Am1-CZMd-PCw-unsplash.jpg" heading={"LUNCH"}/>
          </div>
          <div className="column">
            <ViewCard imgURL="https://i.ibb.co/v3LVJBr/eiliv-sonas-aceron-u-Am1-CZMd-PCw-unsplash.jpg" heading={"DINNER"}/>
          </div>
      </div>
    
      </>
  );
  }
}

export default Portfolio;
