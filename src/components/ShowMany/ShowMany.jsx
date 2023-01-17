import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashTenAction, divideCashAction, getCashTenAction, multiCashAction, takeAllMoneyAction } from '../../actionCreators/actionCreators';
import { ADD_CASH, DIVIDE_CASH, GET_CASH, MULTIPLY_CASH, TAKE_ALL } from '../../consts/consts';

const ShowMany = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state=>state.gold.cash);
    
    return (
        <div>
            <h3>Show your money</h3>
            <h3>{cash}</h3>
            <button onClick={()=>dispatch(addCashTenAction())}>add cash</button>
            <button onClick={()=>dispatch(getCashTenAction())}>get cash</button>
            <button onClick={()=>dispatch(multiCashAction())}>multiply cash</button>
            <button onClick={()=>dispatch(divideCashAction())}>Divide for fellowship</button>
            <button onClick={()=>dispatch(takeAllMoneyAction())}>Take all the money</button>
        </div>
);
}

export default ShowMany;