import React from 'react'
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';
//import { borderTop } from '@mui/system';
//import { WidgetsSharp } from '@mui/icons-material';

const BodyPart = ({ item, setBodyPart, BodyPart}) => {
  return (
    <Stack 
     type= 'button'
     alignItems= 'center'
     justifyContent= 'center'
     className='bodyPart-card'
     sx= {{
        borderTop: BodyPart === item ?  '4px solid #ff2626' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        Width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '45px'
     }}
     onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth'})
     }}
    >
        <img src= {Icon} alt='icon' style={{ width: '40px', height: '40px'}} />
        <Typography fontSize='24px' fontWeight='bold' color= '#3A1212' textTransform= 'capitalize'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart