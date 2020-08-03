import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke"

const API_URL = 'https://icanhazdadjoke.com/';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = { jokes: [] };
        // this.votingFunction = this.votingFunction.bind(this);
    }
    static defaultProps = {
        numJokesToGet: 10
    };

    async componentDidMount() {
        // Getting the joke data.
        let jokeArray = [];

        while (jokeArray.length < this.props.numJokesToGet) {
            let getJoke = await axios.get(API_URL, { headers: { Accept: "application/json" } });
            let jokeData = getJoke.data.joke;

            jokeArray.push(jokeData);
        }
        this.setState({ jokes: jokeArray });
    }

    votingFunction(evt) {
        console.log(evt.target.value)
        // console.log(evt);
        console.log(evt.target);
        console.log("gang")
    }

    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className="JokeList-getmore">New Jokes</button>
                </div>

                <div className="JokeList-Jokes">
                    {this.state.jokes.map(j => (
                        <div>{j}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default JokesList;