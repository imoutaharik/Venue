import React from 'react';

const VenueList = ({venues}) =>{

  return(
    <div>
        <ul>
        {venues.map((v,i)=> <li key={i}>{v.venue.name} <br/> Location : {v.venue.location.address}</li>)}
        </ul>
      </div>
)}

export default VenueList
