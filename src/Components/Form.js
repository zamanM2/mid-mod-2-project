import React, {Component} from 'react'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value:" ",
        resultItem: {}};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});

    }
  
    handleSubmit(event) {

       let userInput = this.state.value.parseInt();
        // console.log("user " + userInput)
      let result = this.state.resultItem.name;
      this.setState({resultItem: this.props.results[userInput]});
      alert('Searching database for ...: ' + this.state.value);
      event.preventDefault();
    }

  
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Data Base:
            <input type="text" value={this.state.value} onChange={this.handleChange} 
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Form