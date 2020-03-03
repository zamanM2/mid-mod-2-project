import React, {Component} from 'react'
import './App.css';
import Home from './Components/Home';
import People from './Components/People';
import Form from './Components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      results : [],
      data: [],
      isloaded: false,
    }
    this.loop = this.loop.bind(this)
  };

  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // {results.map((result,data))}
      this.setState({
        results: data.results,
        data: data,
        isloaded: true,
      })
      // console.log(this.state.results)
      // console.log(this.state.data)
      
    })
    
} 

loop(){
  for(let i= 0; i<this.state.results.length; i++){
    console.log(this.state.results[i])
  }
}
 
  render() {
   
    return (
      

      <Router>
        <div>
          <Form results = {this.state.results} />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
             
            </ul>
          </nav>
  
          <Switch>
            <Route path="/people">
              <People />
            </Route>
            
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <div>
          <button onClick={this.loop}>Data</button>
        </div>
      </Router>
     );
    };
  };

  


export default App;
