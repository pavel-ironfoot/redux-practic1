
import { useDispatch, useSelector } from 'react-redux';
import { addMemberAction, filterFellowshipAction } from '../../actionCreators/actionCreators';
import './ShowFellow.css';

const ShowFellow = () => {
    const dispatch = useDispatch();
    const fellowmembers = useSelector(state=>state.fellow.fellowship);

    const addMember = (name) =>{
        dispatch(addMemberAction(name));
    }
    const filterMembers = () =>{
        dispatch(filterFellowshipAction());
    }

    return (
        <div>
            <h2>the fellowship of the ring</h2>
            <h3>Who will go?</h3>
            {(fellowmembers.length>0)?<div>{fellowmembers.map(elem=><p key={elem}>{elem}</p>)}</div>:<p>They are thinking</p>}
            <button onClick={()=>addMember(prompt('Enter name of one who will help Frodo to take ring to the Mordor',''))}>add one member</button>
            <button onClick={filterMembers}>filter members</button>
        </div>
    );
}

export default ShowFellow;