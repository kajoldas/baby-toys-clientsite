import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';
import educational from '../../../images/educational.jpg'

const products = [
  {
    name: 'Educational Toys',
    description:'Help your kids learn and have fun at the time with a large variety of educational & STEM toys at Target. Free shipping on orders $35+ or same-day pick-up ',
    price:500,
    img:educational
  },
  {
    name: 'Educational Toys',
    description:'Help your kids learn and have fun at the time with a large variety of educational & STEM toys at Target. Free shipping on orders $35+ or same-day pick-up ',
    price:500,
    img:educational
  },
  {
    name: 'Educational Toys',
    description:'Help your kids learn and have fun at the time with a large variety of educational & STEM toys at Target. Free shipping on orders $35+ or same-day pick-up ',
    price:500,
    img:educational
  },
  {
    name: 'Educational Toys',
    description:'Help your kids learn and have fun at the time with a large variety of educational & STEM toys at Target. Free shipping on orders $35+ or same-day pick-up ',
    price:500,
    img:educational
  },
  {
    name: 'Educational Toys',
    description:'Help your kids learn and have fun at the time with a large variety of educational & STEM toys at Target. Free shipping on orders $35+ or same-day pick-up ',
    price:500,
    img:educational
  },
  {
    name: 'Educational Toys',
    description:'Help your kids learn and have fun at the time with a large variety of educational & STEM toys at Target. Free shipping on orders $35+ or same-day pick-up ',
    price:500,
    img:educational
  },
]




const Products = () => {
    return (
        <div>
            <Typography sx={{fontWeight:600,m:3, color:'success.main'}}  variant="h4" component="div">
            Our Products
        </Typography>
           <Container>
           <Box sx={{ flexGrow: 1 }}>
           <Grid container spacing={{ xs: 2, md: 3 }}   columns={{ xs: 4, sm: 8, md: 12 }}>
           {
            products.map(product =><Product
              key={product.name}
              product={product}
            ></Product>)
           }
      </Grid>
    </Box>
         </Container>
        </div>
    );
};

export default Products;