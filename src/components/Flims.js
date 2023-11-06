import React, { Component } from "react";
import PlayersPresentation from "./Player";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    // Sử dụng fetch để gọi API
    fetch("https://6545916cfe036a2fa9546dff.mockapi.io/lab")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ players: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return <PlayersPresentation players={this.state.players} />;
  }
}

export default Main;
