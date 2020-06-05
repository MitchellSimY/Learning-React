class Hello extends React.Component {
    // defaultProps is a reserved react word.
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
    render() {
        
        let bangs = "!".repeat(this.props.bangs);

        return (<h1>Hi {this.props.to}, from {this.props.from}{bangs}</h1>)

    }
}