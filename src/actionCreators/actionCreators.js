import { ADD_BROTHER, ADD_CASH, ADD_CUSTOMER, ADD_GOLD, DELETE_CUSTOMER, DELETE_LAST_CUSTOMER, DIVIDE_CASH, GET_CASH, GET_GOLD, MULTIPLY_CASH, ONLY_FELLOWSHIP, TAKE_ALL } from "../consts/consts"

export const addCustomerAction = (payload) =>{
    return {type: ADD_CUSTOMER,payload}
  }  
export const deleteCustomerAction = (payload) =>{
    return {type: DELETE_CUSTOMER,payload}
  }
export const deleteLastCustomerAction =() =>{
    return {type: DELETE_LAST_CUSTOMER}
  }
export const addCashAction = (a) => {
    return {type:ADD_CASH,payload:a}
}
export const getCashAction = (g) =>{
    return {type:GET_CASH,payload:g}
}
export const addMemberAction = (name) =>{
    return {type:ADD_BROTHER,payload:name}
}
export const filterFellowshipAction = (name) =>{
    return {type:ONLY_FELLOWSHIP}
}
export const addCashTenAction = () => {
    return {type:ADD_GOLD,payload:10}
}
export const getCashTenAction = () =>{
    return {type:GET_GOLD,payload:10}
}
export const multiCashAction = () =>{
    return {type:MULTIPLY_CASH,payload:2}
}
export const divideCashAction = () =>{
    return {type:DIVIDE_CASH,payload:9}
}
export const takeAllMoneyAction = () =>{
    return {type:TAKE_ALL}
}
