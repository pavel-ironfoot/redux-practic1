import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addCashAction, getCashAction } from '../../actionCreators/actionCreators';

const Cash =()=>{
    const dispatch = useDispatch();
    const cash = useSelector(state=>state.cashhh.casha);

    const addMoney = () =>{
        let a = +prompt('add','');
        dispatch(addCashAction(a));
    }
    const getMoney = () =>{
        let g = +prompt('get','')
        dispatch(getCashAction(g));
    }
    return (
        <div>
            <h1>First Block</h1>
            
            <div>{cash}</div>
            <div>
                <button onClick={addMoney}>ADD CASH</button>
                <button onClick={getMoney}>GET CASH</button>
            </div>

        </div>
    );
}
export default Cash;