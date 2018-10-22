import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    coordinates:''
  }

  componentDidMount(){
    this.getLocation()
  }

  getLocation = () =>{
    navigator.geolocation.getCurrentPosition(response =>{
      this.setState({
        coordinates: response.coords.latitude+','+response.coords.longitude
      })
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
