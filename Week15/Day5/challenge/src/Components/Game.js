import "./Game.css";
import React, { Component } from "react";
import Card from "./Card";
import heroes from "./superheroes.json";

let superheroes = heroes.superheroes;
// console.log(superheroes);
// console.log(id, clicked, name, image, occupation);
class Game extends Component {
  constructor() {
    super();
    this.state = {
      superheroes: superheroes,
      clickedArray: [],
      currentScore: 0,
      topScore: 0,
    };
  }
  //   Setting the score
  setScore = (event) => {
    let id = event.target.parentElement.id;
    if (this.state.clickedArray.indexOf(id) === -1) {
      this.state.clickedArray.push(id);
      this.setState({ currentScore: this.state.clickedArray.length });
    } else {
      this.setState({ currentScore: 0 });
      if (this.state.clickedArray.length > this.state.topScore) {
        this.setState({ topScore: this.state.clickedArray.length });
      }
      this.setState({ clickedArray: [] });
    }
  };
  //   rearranging the superheroes cards using a Schwarzman Transformation
  setOrder = () => {
    let unshuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    //   use the transformation to change the id's and thus the order
    let superheroesNew = superheroes.map((value, index) => {
      return (value.id = shuffled[index]);
    });
    this.setState({ superheroes: superheroesNew });
  };
  //    Chain both actions - score setting and reorder
  clickAction = (event) => {
    this.setScore(event);
    this.setOrder();
  };
  render() {
    return (
      <div className="wrapper">
        <div className="titleContainer">
          <h1 className="header">Superheroes Memory Game</h1>
          <nav className="score">
            <p>Top Score: {this.state.topScore}</p>
            <p>Score: {this.state.currentScore}</p>
          </nav>
          <h2 className="subHeader">
            Get points by clicking on an image but don't click on any more than
            once!
          </h2>
        </div>
        <div className="cardContainer">
          {superheroes.map(({ id, name, image, occupation }) => {
            return (
              <div key={id}>
                <Card
                  superhero={{ id, name, image, occupation }}
                  clickAction={this.clickAction}
                />
              </div>
            );
          })}
        </div>
        ;
      </div>
    );
  }
}

export default Game;
