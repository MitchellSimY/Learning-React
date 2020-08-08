import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokesList.css";
import uuid from "uuid/v4";

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

            jokeArray.push({id: uuid(), jokeData, votes: 0});
        }
        this.setState({ jokes: jokeArray});
    }

    // Function that handles votes.
    handleVote(id, delta) {
        this.setState(st => ({
                jokes: st.jokes.map(j => 
                    j.id === id ? {...j, votes: j.votes + delta} : j)
            })
        );
    }

    render() {
        return (
            <div className="JokesList">
                <div className="JokesList-sidebar">
                    <h1 className="JokesList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className="JokeList-getmore">New Jokes</button>
                </div>

                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <Joke key={j.id} votes={j.votes} text={j.jokeData}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default JokesList;