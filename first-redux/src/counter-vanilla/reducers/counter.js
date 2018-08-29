import * as types from '../constants/ActionTypes'


export default function counter(state = 0, action) {
    if (typeof state === 'undefined') {
        return 0
    }
    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        case types.UPDATE_CUSTOM_INCREMENT:
            return state + parseInt(action.value);
        default:
            return state
    }
}