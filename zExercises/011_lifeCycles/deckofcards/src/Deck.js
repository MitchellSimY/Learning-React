import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';


class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, drawnCards: [] }

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {

        // Getting the deck url from and assigning it to response.
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);

        // Setting the state of the deck.
        this.setState({ deck: deck.data });

    }

    async handleClick(evt) {
        let deckId = this.state.deck.deck_id;

        try {
            let assignedDeck = `${API_BASE_URL}${deckId}/draw/`;
            let cardData = await axios.get(assignedDeck);

            if (!cardData.data.success) {
                throw new Error("No cards remaining");
            }
            
            let cardInformation = cardData.data.cards[0];

            // Setting the state.
            this.setState(state => ({
                drawnCards: [...this.state.drawnCards, cardInformation]
            }))

        } catch (err) {
            alert(err);
        }
    }



    render() {

        const output = this.state.drawnCards.map(cards => <Card cardInfo={cards} />);
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