import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';


class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, assignedDeck: null, drawnCards: [] }

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {

        // Getting the deck url from and assigning it to response.
        let deck = await axios.get(API_URL);

        // Setting the state of the deck.
        this.setState({ deck: deck.data });

    }

    async handleClick(evt) {
        let deckId = this.state.deck.deck_id;
        let assignedDeck = `https://deckofcardsapi.com/api/deck/${deckId}/draw/`;

        let deckData = await axios.get(assignedDeck);
        let cardInformation = deckData.data.cards;
        // console.log(cardInformation);
        this.setState(state => ({
            drawnCards: [...this.state.drawnCards, cardInformation]
        }))

        console.log(this.state.drawnCards);


    }


    render() {

        const output = this.state.drawnCards.map(cards => <Card cardInfo={cards}/>);
        return (
            <div>
                <h1>Deck of Cards</h1>
                <button onClick={this.handleClick}>Draw</button>
                {output}
            </div>
        )
    }
}

export default Deck;