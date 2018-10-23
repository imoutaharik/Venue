import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        <TextField
          onChange={this.onChange}
          name='searchInput'
          id="searchinput"
          label="Search Venue"
          type="search"
          style={{width:'60%',marginRight:'theme.spacing.unit', marginLeft:'theme.spacing.unit'}}
          margin="normal"
          variant="filled"
        />
        <Button type='submit' variant="contained" color="secondary" style={{marginRight:'theme.spacing.unit', marginLeft:'10px', marginTop:'24px',marginBottom:'8px'}}>Search</Button>
      </form>
    );
  }
}

export default Search;
