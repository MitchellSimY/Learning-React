import React, {Component} from 'react';


class ButtonClicker extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clicks: 0
        };
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            clicks: this.state.clicks + 1
        }));

        console.log(this.state.clicks);
    }

    render() {
        return (
            <div>
                <h1>{(this.state.clicks > 0) ? this.state.clicks : "" }</h1>
                
                <button onClick={this.handleClick}>Click here to +1</button>
            </div>
        );
    }
}



export default ButtonClicker;