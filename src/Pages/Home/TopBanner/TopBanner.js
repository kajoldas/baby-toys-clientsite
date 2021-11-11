import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import topbanner from '../../../images/topbanner.jpg'
import { Button, Typography } from '@mui/material';
import topbg from '../../../images/topbg.jpg'
import { Link } from 'react-router-dom';


//............. tobackground..........
const topBg ={
    background:`url(${topbg})`,
    marginTop:100,
   
}


const TopBanner = () => {
    return (
        <Box style={topBg}  sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
           <img 
           style={{width:600,}}
           src={topbanner} alt=""/>
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex',
          justifyContent:'flex-start',
          alignItems:'center',
          textAlign:'left',
          backgroundColor:'green'
        }}>
          <Box>
          <Typography variant="h4" sx={{mb:5}}>
           Welcome To
           </Typography>
           <Typography variant="h3" sx={{mb:5}} style={{color:'red',fontWeight:300,}}>
              Baby Toys Websiste!!
           </Typography>
           <Typography variant="h6" sx={{mb:5}}>
            We design and curate world-class toys and games, while providing an extraordinary customer experience. Whether you're shopping for Christmas, Hanukkah, or a special birthday, we have the toys and games that will make a difference in a child's life.
           </Typography>
           <Link to="/moreproducts"> <Button variant="contained" sx={{mb:5}}>More Products</Button></Link>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default TopBanner;