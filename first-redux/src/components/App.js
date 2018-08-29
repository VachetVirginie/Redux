import React, { Component } from 'react';

class App extends Component {


    render() {
        return (
            <div className="App">
                <p>
                    Clicked: <span id="value">{this.props.counter}</span> times
                    <button id="increment" onClick={() => this.props.actions.increment()}>+</button>
                    <button id="decrement" onClick={() => this.props.actions.decrement()}>-</button>
                    <button id="fetch_random_number" onClick={() => this.props.actions.fetchRandomNumber()}>FETCH</button>

                    <input type="text" id="increment_by_input" value={this.props.randomFetch} />
                    <button id="increment_by" onClick={() =>this.props.actions.incrementBy(this.props.randomFetch) }>+</button>
                </p>
                <p id="error"></p>
            </div>
        );
    }
}

export default App;