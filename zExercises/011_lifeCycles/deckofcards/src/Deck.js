import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';


class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, assignedDeck: null, }

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {

        // Getting the deck url from and assigning it to response.
        let deck = await axios.get(API_URL);

        // Setting the state of the deck.
        this.setState({ deck: deck.data });
        // console.log(deck.data)

        let assignedDeck = `https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/`

        let deckData = await axios.get(assignedDeck);
        console.log(deckData.data);

    }

    handleClick(evt) {
        
    }

    render() {
        return (
            <div>
                <h1>Deck of Cards</h1>
                <button onClick={this.handleClick}>Draw</button>
                <Card />
            </div>
        )
    }
}

export default Deck;