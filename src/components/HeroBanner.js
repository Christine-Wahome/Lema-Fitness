import React from 'react';
import { Box,  Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
        }} position='relative' p= '20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mb='20px' mt='30px'>
            Sweat, Smile <br /> and repeat
        </Typography>
        <Typography fontSize='22px' lineHeight= '35px' mb={3}>
            Check out our most effective execersise 
        </Typography>
        <Button variant='contained' color='error' href='#exercises' 
        sx={{ backgroundColor: '#ff2625', padding: '9px'}}
        >
            Explore
        </Button>
        <Typography 
        fontWeight={600}
        color='ff2625'
        sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'}
        }} 
        fontSize= '100px'
        >
            FUN <br /> WORKOUT
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner