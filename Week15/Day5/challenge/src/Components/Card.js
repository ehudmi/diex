import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    const { id, clicked, name, image, occupation } = this.props.superhero;
    this.state = { id, clicked, name, image, occupation };
  }
  render() {
    const { id, name, image, occupation } = this.state;
    return (
      <div onClick={this.props.clickAction} id={id}>
        <img alt="" src={image} width="100px" height={"100px"} />
        <h4>
          <span>Name: </span>
          {name}
        </h4>
        <h4>
          <span>Occupation: </span>
          {occupation}
        </h4>
      </div>
    );
  }
}

export default Card;
