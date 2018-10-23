import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FacebookProvider, ShareButton } from 'react-facebook';

const VenueList = ({venues}) =>{
  return(
    <div style={{display:'flex', flexWrap:'wrap', margin:'0 auto', width:'80%', marginTop:20}}>
      {venues.map((v,i)=> <Card key={i} style={{maxWidth: 345, width:300, margin:15}}>
         <CardActionArea>
           <CardMedia
             style={{height:140}}
             image='https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png'
             title={v.venue.name}
           />
           <CardContent>
             <Typography style={{textAlign:'left'}} gutterBottom variant="h5" component="h2">
               {v.venue.name}
             </Typography>
             <Typography style={{textAlign:'left'}}  component="p">
               Address : {v.venue.location.formattedAddress[0]}
               <br/>
               Distance : {v.venue.location.distance} m
             </Typography>
             <Typography style={{textAlign:'left'}}  component="p">
               Category : {v.venue.categories[0].name}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
          <FacebookProvider appId="2662900933935218">
            <ShareButton href={'https://foursquare.com/v/' + v.venue.id}>Share</ShareButton>
          </FacebookProvider>
         </CardActions>
       </Card> )}
      </div>
)}

export default VenueList
