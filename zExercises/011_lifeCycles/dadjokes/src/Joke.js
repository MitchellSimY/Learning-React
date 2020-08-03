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
            <div className="JokeBar">
                <button onClick={this.props.vote()} value="up">Up</button>
                
                <button onClick={this.props.vote()} value="down">Down</button>
                {this.props.jokeInformation[0].joke}
            </div>
        )
    }
}

export default Joke;