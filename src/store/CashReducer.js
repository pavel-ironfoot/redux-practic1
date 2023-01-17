
import { ADD_CASH, GET_CASH } from "../consts/consts";
import defaultState from "./defaultState";

export const cashReducer = (state=defaultState,action) =>{
    switch(action.type){
        case ADD_CASH:
           return {...state,casha:state.casha + action.payload};
        case GET_CASH:
           return {...state,casha:state.casha - action.payload}  
        default: return state;
      }
  }