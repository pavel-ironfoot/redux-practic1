import { useDispatch,useSelector } from 'react-redux';
import React from 'react';
import './App.css';
import Repeat from './components/Repeat/Repeat';
import Cash from './components/Cash/Cash';
import SomePeople from './components/SomePeople/SomePeople';

function App() {
  
  return (
    <div>
      <div className='app'>
        <hr></hr>
          <Cash />
        <hr></hr>
          <SomePeople  />
        <hr></hr>
      </div>
      <main>
        <Repeat />
      </main>
    </div>
  );
}

export default App;
