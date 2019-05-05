import React from 'react';
import {CounterContainer} from './containers/Counter';
import './App.css';

function App({store}) {
  return (
    <div className="App">
      <h1>Counter Redux-app</h1>

      <CounterContainer />
    </div>
  );
}

export default App;
