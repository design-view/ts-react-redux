import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import GithubProfileLoader from './containers/GithubProfileLoader';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <TodosContainer/>
      <GithubProfileLoader/>
    </div>
  );
}

export default App;
