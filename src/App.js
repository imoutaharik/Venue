import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state={
    coordinates:'',
    venues:[]
  }

  componentDidMount(){
    this.getLocation()
  }

  getLocation = () =>{
    navigator.geolocation.getCurrentPosition(response =>{
      this.setState({
        coordinates: response.coords.latitude+','+response.coords.longitude
      }, ()=>{
        this.getVenues('sushi')
      })
    })
  }

  getVenues = (query) =>{
    const url = 'https://api.foursquare.com/v2/venues/explore?';
    const params = {
      client_id:'MANRL0YHN23ZJOZTG4XRCMSM3NDYRP4VLX5SAN1T3YBQBXIZ',
      client_secret:'ZXKSYHN5UBUH0AUY0CY1QJT3BVTYW2SGHSSV5B4UARX52ZYA',
      ll:this.state.coordinates,
      query:query,
      v:"20181022"
    }
    axios.get(url + new URLSearchParams(params))
    .then(res =>{
      this.setState({venues:res.data.response.groups[0].items})
      console.log(this.state)
    })
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.venues.map((v,i)=> <li key={i}>{v.venue.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
