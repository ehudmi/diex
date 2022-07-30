import React, { Component } from "react";
import Card from "../components/Card";
import points from "../assets/icons8-backhand-index-pointing-right-48.png";
import lightning from "../assets/icons8-lightning-48.png";
import shakas from "../assets/icons8-call-me-hand-48.png";
import diamonds from "../assets/icons8-diamond-48.png";

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          label: "points",
          icon: points,
          number: 3000,
        },
        {
          label: "lightnings",
          icon: lightning,
          number: 6540,
        },
        {
          label: "shakas",
          icon: shakas,
          number: 337010,
        },
        {
          label: "diamonds",
          icon: diamonds,
          number: 98661,
        },
      ],
    };
  }

  render() {
    return this.state.data.map((item, index) => {
      return (
        <div key={index}>
          <Card label={item.label} icon={item.icon} number={item.number} />
        </div>
      );
    });
  }
}

export default CardContainer;
