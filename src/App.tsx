import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import GithubContainer from './containers/GithubContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <TodosContainer/>
      <GithubContainer/>
    </div>
  );
}

export default App;
