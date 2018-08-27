import * as types from '../constants/ActionTypes';


//Le reducer prend deux arguments : le state et l'action qui définira comment est modifié le state
export default function counterReducer(state, action) {
    if (typeof state === 'undefined') {
        return 1000
    }
    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        case types.INCREMENT2:
            return state +2;
        case types.VALEUR:
            return state +10;   

        default:
            return state
    }
}