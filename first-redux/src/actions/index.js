import * as types from '../constants/ActionTypes'

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });

export const incrementBy = function(value) {
    if(isNaN(value))
        return { type: types.DISPLAY_INCREMENT_INPUT_ERROR, error: 'is not a number' };
    else if(value < 0)
        return { type: types.DISPLAY_INCREMENT_INPUT_ERROR, error: 'value is negative' };
    else{
        return { type: types.UPDATE_CUSTOM_INCREMENT, error:'',  value: value}
    }
};
