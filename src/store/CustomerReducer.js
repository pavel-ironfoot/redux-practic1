
import { ADD_CUSTOMER, DELETE_CUSTOMER, DELETE_LAST_CUSTOMER } from "../consts/consts";
import defaultState from "./defaultState";

export const customerReducer = (state=defaultState,action) =>{
    switch(action.type){
        case ADD_CUSTOMER:
           return {...state,customers1:[...state.customers1,action.payload]};
        case DELETE_CUSTOMER:
           return { ...state, customers1:state.customers1.filter(elem=>elem.id !== action.payload)};
        case DELETE_LAST_CUSTOMER:
           return {...state,customers1:state.customers1.slice(0,state.customers1.length-1)};
        default:
           return state;
      }
  }

