import React, { Component } from 'react';
import CreateTodo from './containers/createTodo';
import Table from './containers/Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="inputform">
          <div className = "">
            <CreateTodo />
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
