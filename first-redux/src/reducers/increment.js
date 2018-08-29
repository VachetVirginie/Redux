import * as types from '../constants/ActionTypes'

let initialState = {
  error: '',
    inputValue: 1
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
        case types.UPDATE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            };
        default:
            return state
    }
}