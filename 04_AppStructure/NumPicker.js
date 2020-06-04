function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}


class NumPicker extends React.Component {
    render() {

        const num = getNum();
        let msg;

        if(num === 7) {
            msg = 
            <div>
                <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif"/>
            </div>
        } else {
            msg = <p>Sorry, you lose!</p>;
        }

        // ========================================
        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
            </div>
        )
    }
}