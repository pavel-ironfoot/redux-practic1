import {  ADD_GOLD, DIVIDE_CASH, GET_GOLD, MULTIPLY_CASH, TAKE_ALL } from "../consts/consts";
import defaultState from "./defaultState";

export const moneyReducer = (state=defaultState,action) =>{
    switch(action.type){
        case ADD_GOLD:
            return {...state,cash:state.cash + action.payload};
        case GET_GOLD:    
            return {...state,cash:state.cash - action.payload};
        case MULTIPLY_CASH:
            return {...state,cash:state.cash*action.payload}; 
        case DIVIDE_CASH:
            return {...state,cash:Math.floor(state.cash/action.payload)};  
        case TAKE_ALL:
            return {...state,cash:0};
        default:
            return state;
    }
}