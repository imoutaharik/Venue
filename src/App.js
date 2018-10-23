import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import VenueList from '../src/components/VenueList';
import Search from './components/Search';

class App extends Component {
  state={
    coordinates:'',
    venues:[],
    venueDetail:[]
  }

  componentDidMount(){
    this.getLocation()
  }

  getLocation = () =>{
    navigator.geolocation.getCurrentPosition(response =>{
      this.setState({
        coordinates: response.coords.latitude+','+response.coords.longitude
      }, ()=>{
        this.getVenues()
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
      console.log(this.state.venues)
    })
  }

  getVenueDetail = (id) =>{
    const url = 'https://api.foursquare.com/v2/venues/';
    const params = {
      client_id:'MANRL0YHN23ZJOZTG4XRCMSM3NDYRP4VLX5SAN1T3YBQBXIZ',
      client_secret:'ZXKSYHN5UBUH0AUY0CY1QJT3BVTYW2SGHSSV5B4UARX52ZYA',
      v:"20181022"
    }
    axios.get(url + id + '?' + new URLSearchParams(params))
    .then(res =>{
      this.setState({venueDetail : res.data.response.venue})
      console.log(this.state.venueDetail)
    })
  }



  render() {
    const {venues} = this.state
    return (
      <div className='App' style={{textAlign:'center'}}>
        <div>
          <video className='video-background' autoPlay muted loop>
            <source src="https://res.cloudinary.com/dtawbk4r1/video/upload/v1540311789/Profile_pictures/Coffee-Shot.mp4" type="video/mp4"/>
          </video>
          <Search getVenues={this.getVenues}/>        
        </div>
        <div style={{marginTop:20}}>
          <VenueList venues={venues}/>
        </div>
      </div>
    );
  }
}

export default App;
