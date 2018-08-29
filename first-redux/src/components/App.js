import React, { Component } from 'react';

class App extends Component {
    constructor(props){
      super(props) ;
      this.updateInput = this.updateInput.bind(this) ;  
    }

    updateInput(event) {
        this.props.actions.updateInputValue(event.target.value);
    }

    render() {
        return (
            <div className="App">
                <p>
                    Clicked: <span id="value">{this.props.counter}</span> times
                    <button id="increment" onClick={() => this.props.actions.increment()}>+</button>
                    <button id="decrement" onClick={() => this.props.actions.decrement()}>-</button>
                    <button id="fetch_random_number" onClick={() => this.props.actions.fetchRandomNumber()}>FETCH</button>

                    <input type="text" id="increment_by_input" value={this.props.inputValue} onChange={this.updateInput}  />
                    <button id="increment_by" onClick={() =>this.props.actions.incrementBy(this.props.inputValue) }>+</button>
                </p>
                <p id="error"></p>
            </div>
        );
    }
}

export default App;