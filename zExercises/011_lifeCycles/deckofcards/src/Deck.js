import React, {Component} from "react";
import axios from "axios";
const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        
        // Getting the deck url from and assigning it to response.
        let deck = await axios.get(API_URL);

        this.setState({deck: deck.data});
        console.log(deck.data)

    }

    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

export default Deck;