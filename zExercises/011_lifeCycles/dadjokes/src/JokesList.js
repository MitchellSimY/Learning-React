import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke"

const API_URL = 'https://icanhazdadjoke.com/';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = { jokes: [] }
    }

    async componentDidMount() {
        // Getting the joke data.
        let i = 0;
        do {
            let getJoke = await axios.get(API_URL, { headers: { Accept: "application/json" } });
            let jokeData = getJoke.data;

            let score = 0;
            let jokeInfo = [jokeData, score];
            this.setState(st => ({
                jokes: [...this.state.jokes, jokeInfo]
            }))
            i++
        } while (i !== 10)
        console.log(this.state.jokes);
    }


    render() {

        const jokeOutput = this.state.jokes.map(jokes => <Joke jokeInformation={jokes}/>);
        return (
            <div>
                <h1>Test</h1>
                {jokeOutput}
            </div>
        )
    }
}

export default JokesList;