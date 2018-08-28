import * as types from '../constants/ActionTypes'

let initialState = {
    error: '',
    counter: 1
};

export default function counter(state = initialState, action) {

    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                counter: state.counter +1
            };
        case types.DECREMENT:
            return {
                ...state,
                counter: state.counter -1
            };
        case types.UPDATE_CUSTOM_INCREMENT:
            return {
                error: action.error,
                counter: state.counter + parseInt(action.value)
            };
        case types.DISPLAY_INCREMENT_INPUT_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}