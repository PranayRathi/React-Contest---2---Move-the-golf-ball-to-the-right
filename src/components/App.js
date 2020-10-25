import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  MoveRight() {
    document.onkeydown = (event) => {
      let moveRight =
        Number(this.state.ballPosition.left.slice(0, -2)) + 5 + "px";
      if (event.keyCode === 39) {
        this.setState({ ballPosition: { left: moveRight } });
      }
    };
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={this.state.ballPosition}
          onKeyPress={this.MoveRight}
        ></div>
      );
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    this.MoveRight = this.MoveRight.bind(this);
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
