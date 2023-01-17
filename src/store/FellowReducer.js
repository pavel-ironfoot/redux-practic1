import { ADD_BROTHER, ONLY_FELLOWSHIP } from "../consts/consts";
import defaultState from './defaultState'

const nine = ['Aragorn','Gimli','Boromir','Gandalf','Frodo','Merry','Pippin','Sam','Legolas'];
export const fellowReducer = (state=defaultState,action) =>{
    switch(action.type){
    case ADD_BROTHER:
        return {...state,fellowship:[...state.fellowship,action.payload]}
    case ONLY_FELLOWSHIP: 
        return {...state,fellowship:[...state.fellowship.filter(elem=>nine.includes(elem))]}
    default:
        return state;
    }
}