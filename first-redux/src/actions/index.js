import * as types from '../constants/ActionTypes'

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });


export const incrementBy = function(value) {
    return (dispatch) => {
        if(isNaN(value))
            dispatch(displayIncrementInputError("is not a number"));
        else if(value < 0)
            dispatch(displayIncrementInputError("value is negative"));
        else{
            dispatch(eraseIncrementInputError());
            dispatch(updateCustomIncrement(value));
        }
    }
}

export const updateCustomIncrement = (value) => ({ type: types.UPDATE_CUSTOM_INCREMENT, value});
export const displayIncrementInputError = (error) => ({ type: types.DISPLAY_INCREMENT_INPUT_ERROR, error});
export const eraseIncrementInputError = () => ({ type: types.ERASE_INCREMENT_INPUT_ERROR});


export const updateInputValue = (value) => ({ type: types.UPDATE_INPUT_VALUE, inputValue: value});

export const fetchRandomNumber = function() {
    return async (dispatch) => {
        const response = await fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8');
        const datas = await response.json();
        dispatch(updateInputValue(datas.data[0]));
    }
};