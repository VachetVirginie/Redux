import store from '../store';
import * as actions from '../actions/index'
import React from 'react'


document.getElementById('increment_by')
    .addEventListener('click', function () {
        let val = document.getElementById('increment_by_input').value;
        store.dispatch(actions.incrementBy(val));
    })

document.getElementById('increment')
    .addEventListener('click', function () {
        store.dispatch(actions.increment())
    })


document.getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch(actions.decrement())
    })


