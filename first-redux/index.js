import store from './store';
import './components/index.js';

let $counter = document.getElementById('value');
let $error = document.getElementById('error');

function render() {
    $counter.innerHTML = store.getState().counter;
    $error.innerHTML = store.getState().error;
}
render();

store.subscribe(render);
