import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokesList.css";
import uuid from "uuid/v4";

const API_URL = 'https://icanhazdadjoke.com/';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false
        };
        // this.votingFunction = this.votingFunction.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        numJokesToGet: 10
    };

    async getJokes() {

        // Getting the joke data.
        let jokeArray = [];

        while (jokeArray.length < this.props.numJokesToGet) {
            let getJoke = await axios.get(API_URL, { headers: { Accept: "application/json" } });
            let jokeData = getJoke.data.joke;

            jokeArray.push({ id: uuid(), jokeData, votes: 0 });
        }
        this.setState(st => ({
            loading: false,
            jokes: [...st.jokes, ...jokeArray],
        }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));
        window.localStorage.setItem("jokes", JSON.stringify(jokeArray));
    }

    handleClick() {
        this.setState({ loading: true });
        this.getJokes()

    }

    async componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes();
    }

    // Function that handles votes.
    handleVote(id, delta) {
        this.setState(st => ({
            jokes: st.jokes.map(j =>
                j.id === id ? { ...j, votes: j.votes + delta } : j)
        }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="spinner">
                    <i className="far fa-8x fa-laugh fa-spin" />
                    <h1 className="JokesList-spinner">Loading...</h1>
                </div>
            )
        }
        return (
            <div className="JokesList">
                <div className="JokesList-sidebar">
                    <h1 className="JokesList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button className="JokeList-getmore" onClick={this.handleClick}>New Jokes</button>
                </div>

                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <Joke key={j.id} votes={j.votes} text={j.jokeData}
                            upVote={() => this.handleVote(j.id, 1)}
                            downVote={() => this.handleVote(j.id, -1)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokesList;