import React, {Component} from "react"


class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let card = this.props.cardInfo;
        return <div>
            <img src={card.image} />
        </div>
    }
}

export default Card;