import store from './store';
import './components/index.js';

let $counter = document.getElementById('value');
let $error = document.getElementById('error');
let $inputIncr = document.getElementById('increment_by_input');

function render() {
    $counter.innerHTML = store.getState().counter;
    $error.innerHTML = store.getState().increment.error;
    $inputIncr.value = store.getState().increment.randomFetch;
}
render();

store.subscribe(render);
