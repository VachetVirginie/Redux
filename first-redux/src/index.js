import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Counter.js';
import { createStore } from 'redux'
import counterReducer from './reducers/index';
import * as actions from './actions/index';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



let store = createStore(counterReducer);

let valueEl = document.getElementById('value');
function render() {
    valueEl.innerHTML = store.getState().toString()
}
render();

store.subscribe(render);

document.getElementById('increment')
    .addEventListener('click', function () {
        store.dispatch(actions.increment())
    })

document.getElementById('increment2')
    .addEventListener('click', function () {
        store.dispatch(actions.increment2())
    })


document.getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch(actions.decrement())
    })
document.getElementById('incrementIfOdd')
    .addEventListener('click', function () {
        if (store.getState() % 2 !== 0) {
            store.dispatch(actions.increment())
        }
    })
document.getElementById('incrementAsync')
    .addEventListener('click', function () {
        setTimeout(function () {
            store.dispatch(actions.increment())
        }, 1000)
    })

    document.getElementById('plusvaleur')
    .addEventListener('click', function () {
        let value = document.getElementById('valeur').value;
        store.dispatch(actions.valeur(value))
    })
