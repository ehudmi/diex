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
          icon: points,
          label: "Points",
          number: "3,000",
        },
        {
          icon: lightning,
          label: "Lightnings",
          number: "6,540",
        },
        {
          icon: shakas,
          label: "Shakas",
          number: "337,010",
        },
        {
          icon: diamonds,
          label: "Diamonds",
          number: "98,661",
        },
      ],
    };
  }
  render() {
    return this.state.data.map((item, index) => {
      return (
        <div key={index}>
          <Card icon={item.icon} label={item.label} number={item.number} />
        </div>
      );
    });
  }
}

export default CardContainer;
