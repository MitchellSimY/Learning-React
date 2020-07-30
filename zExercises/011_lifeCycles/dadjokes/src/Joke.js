import React, { Component } from "react";
import axios from "axios";

const API_URL = 'https://icanhazdadjoke.com/';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = { jokeInfo: [] }
    }

    async componentDidMount() {
        let getJoke = await axios.get(API_URL);
        this.setState({jokeInfo: [...getJoke]})
    }



    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

export default Joke;