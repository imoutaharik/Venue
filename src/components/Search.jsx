import React, { Component } from 'react';

class Search extends Component {
  state={
    searchInput:''
  }
  onChange = (e)=>{
    this.setState({searchInput : e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault()
    this.props.getVenues(this.state.searchInput)
  }

  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type="text" placeholder='search venue' name='searchInput' id='searchinput'/>
        <button type='submit' >Search</button>
      </form>
    );
  }
}

export default Search;
