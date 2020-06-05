function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

function refreshPage() {
    window.location.reload(false);
}


class NumPicker extends React.Component {
    render() {

        const num = getNum();
        let msg;

        if(num === 7 || num === 3) {
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
                <button onClick={refreshPage}>Click here to reset</button>
                {msg}
            </div>
        )
    }
}