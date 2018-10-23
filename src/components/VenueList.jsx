import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { FacebookProvider, ShareButton } from 'react-facebook';

const VenueList = ({venues}) =>{
  return(
  <Grid
  className='venueList' 
  container 
  spacing={8}
  direction="row"
  justify="center"
  alignItems="center"
  style={{margin:'0 auto', width:'90%'}}
  >
    
      {venues.map((v,i)=> 
      <Grid item xs={12} md={6} lg={3}>
      <Card key={i} style={{height:220}}>
         <CardActionArea>
           <CardContent>
             <Typography style={{textAlign:'left'}} gutterBottom variant="h5" component="h2">
               {v.venue.name}
             </Typography>
             <Typography style={{textAlign:'left'}}  component="p">
               <strong>Address : </strong> {v.venue.location.formattedAddress[0]}
               <br/>
               <strong>Distance : </strong><span style={{color:'#f50057'}}>{v.venue.location.distance}</span> m
             </Typography>
             <Typography style={{textAlign:'left'}}  component="p">
               <strong>Category :</strong> {v.venue.categories[0].name}
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
          <FacebookProvider appId="2662900933935218">
            <ShareButton className='share-btn' href={'https://foursquare.com/v/' + v.venue.id}>Share</ShareButton>
          </FacebookProvider>
          <Button size="small">Learn More</Button>
         </CardActions>
       </Card> 
       </Grid>)}
    </Grid>
)}

export default VenueList