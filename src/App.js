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
  };

  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        results: data.results,
        data: data,
        isloaded: true,
      })
      console.log(this.state.results)
      console.log(this.state.data)
      
    })
    
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
      </Router>
     );
    };
  };

  


export default App;
