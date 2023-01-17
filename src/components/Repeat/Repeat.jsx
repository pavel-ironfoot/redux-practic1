import ShowMany from '../ShowMany/ShowMany';import { Provider } from 'react-redux';
import ShowFellow from '../ShowFellow/ShowFellow';


import styles from './Repeat.css';

const Repeat = () => {
    return (
        
            <div className='repeat'>
                <hr />
                <h1>Repeat Redux</h1>
                <ShowMany />
                <hr />
                <ShowFellow />
            </div>
        
    );
}

export default Repeat;