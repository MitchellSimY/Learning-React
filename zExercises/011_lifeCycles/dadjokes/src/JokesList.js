import React, { Component } from "react";
import axios from "axios";

const API_URL = 'https://icanhazdadjoke.com/';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = { jokeInfo: [] }
    }

    async componentDidMount() {
        let getJoke = await axios.get(API_URL, { headers: { Accept: "application/json" }});
        console.log(getJoke);

    }



    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

export default JokesList;