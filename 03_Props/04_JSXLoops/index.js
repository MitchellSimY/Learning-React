
class App extends React.Component {
    render() {
        return (
            <div>
            
                <Friend
                    name="Elton"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
                <Friend
                    name="Mitch"
                    hobbies={['Sports', 'Hanging out with friends', 'Coding']}
                />
                <Friend
                    name="Mitchell"
                    hobbies={['Playing games', 'Exploring', 'Coding']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

