import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount(){
    axios.get('/data').then(res=>{
      if(res.status === 200){
        this.setState({
          data:res.data,
          test: 1
        });
        // console.log(this.state);
      }
    })
  }
  componentWillMount(){
    console.log('组件马上加载');
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to r</h1>
          <h2>{this.state.test}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
