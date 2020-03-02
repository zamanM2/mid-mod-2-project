import React, {Component} from 'react'
import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home';
// import Classes from './Components/Classes';
import People from './Components/People';
import Form from './Components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// class Teacher {
//   constructor(name, difficulty, looks){
//     this.name = name;
//     this.difficulty= difficulty;
//     this.looks= looks;
//   }
  
// }

// let Teacher1 = this.


class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      data: [],
      isloaded: false,
    }
  };

  componentDidMount(){
    fetch('url')
    then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        data: json,
        isloaded: true,
      })
    })
    console.log(this.props)
}
 
  render() {
    // const { loading } = this.state;

    // if (loading) {
    //   return <p>Loading..</p>;

    return (
      <Router>
        <div>
          <Form />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
            </ul>
          </nav>
  
          <Switch>
            <Route path="/people">
              <People />
            </Route>
            {/* <Route path="/users">
              <Users />
            </Route> */}
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
