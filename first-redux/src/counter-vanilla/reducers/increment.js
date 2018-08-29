import * as types from '../constants/ActionTypes'

let initialState = {
  error: '',
  randomFetch: 1
};

export default function increment(state = initialState, action) {

    switch (action.type) {
        case types.DISPLAY_INCREMENT_INPUT_ERROR:
            return {
                ...state,
                error: action.error
            };
        case types.ERASE_INCREMENT_INPUT_ERROR:
            return {
                ...state,
                error: ''
            };
        case types.UPDATE_RANDOM_FETCH:
            return {
                ...state,
                randomFetch: action.randomFetch
            };
        default:
            return state
    }
}