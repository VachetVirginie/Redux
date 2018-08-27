import * as types from '../constants/ActionTypes';


export const increment = function(){
    return { type: types.INCREMENT };
};

export const decrement = () => ({ type: types.DECREMENT });

export const increment2 = () => ({ type: types.INCREMENT2 });

export const valeur = () => ({ type: types.valeur });