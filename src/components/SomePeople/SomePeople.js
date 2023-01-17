import React, { useRef,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addCustomerAction, deleteCustomerAction, deleteLastCustomerAction } from '../../actionCreators/actionCreators';

const SomePeople =()=>{
    const dispatch = useDispatch();
    const customers = useSelector(state=>state.customers.customers1);

    const addCustomer=()=>{
        let name=prompt('name?','');
        const customer = {
            name:name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    }
    const deleteCustomer=(customer)=>{
        dispatch(deleteCustomerAction(customer.id)); 
    }
    const deleteLastCustomer=()=>{
        dispatch(deleteLastCustomerAction());
    }

    return (
        <div>
            <h1>Second Block</h1>
            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteLastCustomer}>Delete Customer</button>
            <hr  />
            <div>
                {customers.length>0?<div>
                    {customers.map(elem=><div onClick={()=>{deleteCustomer(elem)}} key={elem.id}>{elem.name}</div>)}
                    </div>:<div>Ara is Empty</div>}
            </div>
        </div>
    );
}
export default SomePeople;