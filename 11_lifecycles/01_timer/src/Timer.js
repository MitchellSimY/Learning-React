import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        console.log("In constructor!");
    }

    componentDidMount() {
        console.log("In component did mount.");
    }

    render() {
        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
}

export default Timer;