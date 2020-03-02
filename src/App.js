import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home';
import Classes from './Components/Classes';
import Teachers from './Components/Teachers';
import Form from './Components/Form';

class Teacher {
  constructor(name, difficulty, looks){
    this.name = name;
    this.difficulty= difficulty;
    this.looks= looks;
  }
  
}

let Teacher1 = this.


class App extends Component{
  state={

    user:null
  };
  render() {
    // const { loading } = this.state;

    // if (loading) {
    //   return <p>Loading..</p>;

    return (
      <Router>
        <div>
          <Form />
          
          <Route
            exact path="/" component={Home} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/teachers" component={Teachers} />
          
        </div>

       

      </Router>
    );
  };
 
  }



export default App;
  );
}

export default App;
