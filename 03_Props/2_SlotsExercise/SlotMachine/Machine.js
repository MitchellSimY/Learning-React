
function isEqual (s1,s2,s3) {
    if (s1 === s2 && s1 === s3) {
        return "You win!";
    } else {
        return "Did not match.";
    }
}


class Machine extends React.Component {
    render() {
        const colors = { fontSize: '10px', backgroundColor: 'green' }
        return (
            <div className="Machine">
                <p style={colors}>
                <h1>{this.props.s1} {this.props.s2} {this.props.s3}</h1>
                <h2>{isEqual(this.props.s1,this.props.s2,this.props.s3)}</h2>
                </p>
            </div>
        )
    }
}
