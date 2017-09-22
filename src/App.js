import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  constructor(props){
    super(props)
    this.state={name: "Kazoo"}
  }

  doSomething = () => {
    let username = document.getElementById("user").value;
    this.setState({name: username})
  }

  render() {
    return (
       <div className="container">
         <Header name="Nicole"/>
         <div className="central_box">
          <div id="output">{this.state.name}</div>
          <input id="user" />
          <button className="btn" onClick={this.doSomething}> update name </button>
         </div>
         <Footer name="Nicole" />
       </div>
    );
  }
}

export default App;
