import React, { Component } from "react";
import axios from "axios";

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        console.log(url);
        let response = await axios.get(url);
        console.log(response);
    }

    render() {
        return (
            <div>
                <h1>GITHUB USER INFO</h1>
            </div>
        )
    }
}

export default GithubUserInfo;