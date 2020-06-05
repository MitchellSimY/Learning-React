


class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = s1 === s2 & s2 === s3;


        const colors = { fontSize: '10px'}
        return (
            <div className="Machine">
                <p style={colors}>
                <h1>{this.props.s1} {this.props.s2} {this.props.s3}</h1>
                <h2 className={winner ? 'win' : 'lose'}>{winner ? 'Winner!' : 'Loser!'}</h2>
                </p>
            </div>
        )
    }
}
