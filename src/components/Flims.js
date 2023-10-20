import { Component } from "react";
import Flims from "../shared/ListOfFilms";
import PlayersPresentation from "./Player";

export class Main extends Component {
    constructor() {
        super();
        this.state ={
            players:Flims
        };
    }

    render() {
        return <PlayersPresentation players={this.state.players}/>
    }


}
export default Main