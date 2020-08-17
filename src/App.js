import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Components Life Cycle
          </p>

          <Body />

        </header>
      </div>
    );
  }
}

class Body extends Component {

  constructor(props){
    super(props);

    this.state = {
      r:0
    };
    this.getRandom=this.getRandom.bind(this);
  }

  getRandom(){
    // console.log("Random Number Called");
    this.setState({ r: (Math.floor(Math.random()*10)) });
  }

  render(){
    return(
      <div>
        <p>Here it is Component Body</p>

        <button className="button" onClick={this.getRandom}>Random Number</button>

        <Numbers myNumber={this.state.r}/>

      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount(){
    console.log("componentWillMount called here");
  }

  componentDidMount(){
    console.log("componentDidMount called here");
  }

  componentWillReceiveProps(){
    console.log("componentWillreceiveProps called here")
  }

  shouldComponentUpdate(newProps,newState){
    console.log("shouldComponentUpdate called");
    return true;
  }

  componentWillUpdate(newProps,newState){
    console.log("componentWillUpdate called");
  }

  componentDidUpdate(newProps,newState){
    console.log("componentDidUpdate called");
  }

  componentWillUnmount(newProps,newState){
    console.log("componentWillUnmount called");
  }

  render(){
    return(
      <div>
        <p>Number Is :<br/>{this.props.myNumber}</p>
      </div>
    );
  }
}

export default App;
