class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    bangs={3}
                />
                <Hello
                    to="Mitchell"
                    
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));