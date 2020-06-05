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
                    to="Xee" 
                    from="Mitchell" 
                    bangs={4}
                />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));