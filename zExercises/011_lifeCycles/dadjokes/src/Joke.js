import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
    constructor(props) {
        super(props);
    }


    // Give upvote and downvote button.
    // Maybe pass upwards?

    render() {

        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fas fa-arrow-up"></i>
                    <span>{this.props.vote}</span>
                    <i className="fas fa-arrow-down"></i>
                </div>
                <div className="Joke-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Joke;