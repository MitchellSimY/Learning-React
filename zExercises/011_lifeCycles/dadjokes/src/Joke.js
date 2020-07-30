import React, {Component} from "react";

class Joke extends Component {
    constructor(props) {
        super(props);
    }


    // Give upvote and downvote button.
    // Maybe pass upwards?

    render () {
        console.log(this.props.jokeInformation[0].joke)
        return (
            <div>
                <p>{this.props.jokeInformation[0].joke}</p>
            </div>
        )
    }
}

export default Joke;