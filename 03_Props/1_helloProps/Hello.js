class Hello extends React.Component {
    render() {
        
        let bangs = "!".repeat(this.props.bangs);

        return <h1>Hi {this.props.to}, from {this.props.from}{bangs}</h1>

    }
}