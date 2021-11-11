import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';




const Product = (props) => {
    const {name,description,price,img} = props.product;

    return (
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275 }}>
        <CardMedia
        component="img"
        style={{width:'auto',height:'100px',margin:'0 auto'}}
        image={img}
        alt="Paella dish"
      />

      <CardContent>
       
        <Typography variant="h5" component="div">
         {name}
        </Typography>
       
        <Typography variant="body2"
         color="text.secondary" >
         {description}
        </Typography>
        <Typography variant="body2">
          Price:{price}
        </Typography>
       

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 

        </Grid>
    );
};

export default Product;