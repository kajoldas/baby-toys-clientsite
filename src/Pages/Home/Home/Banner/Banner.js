import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import './Banner.css'
import { Link } from 'react-router-dom';

const bg ={
    background: `url(${"https://thumbs.dreamstime.com/b/baby-kids-toys-banner-background-wooden-educational-natural-light-green-top-view-flat-lay-180323902.jpg"})`,
    marginTop:200,
    backgroundColor: 'rgba(45,30,73, 0.7)',
    backgroundBlendMode: 'soft-light',

}

const Banner = () => {
    return (
        <div>
            <Box style={bg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                        <Grid sx={{mb:1, mt:1, pb:2}} item xs={12} md={6} >
                            <img style={{marginTop:1}} src="https://www.nicepng.com/png/detail/31-311583_banner-1-baby-toys.png" alt="" />
                        </Grid>
                        <Grid sx={{ mb:1, mt:2, pb:2, display: 'flex', 
                        justifyContent:'flex-start', textAlign:'left',
                        alignItems:'center' }} item xs={12} md={6} >
                            <Box>
                                <Typography variant="h4" sx={{color:'white'}}>
                                    Shop With Us
                                </Typography >
                                <Typography variant="h3" sx={{color:'white'}}>
                                    Today!
                                </Typography>
                                <Typography variant= "h6" sx={{fontSize:24, color:'white', fontWeight:300 }}>
                                Made for a child to play with. Your favorite childhood toy might have been a dollhouse, a stuffed animal, or a set of blocks. Some toys are specifically designed for play, like a small wooden train set or a baby's shape sorter.
                                </Typography>
                                <Link to="/all-products"><Button  sx={{mt:3}} variant="contained" >Explore Product</Button></Link>
                            </Box>
                        </Grid>
                    
                    
                </Grid>
            </Box>
        </div>
    );
};

export default Banner;