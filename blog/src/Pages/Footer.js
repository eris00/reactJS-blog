import React from 'react'
import './styles/main.css';
import { Box } from '@mui/system'
import { Typography } from '@mui/material';

function Footer() {
  return (

      <Box bgcolor='primary.main' sx={{position:"fixed", bottom: 0, width:'100%', height:'10vh' ,display:'flex', justifyContent:'center', alignItems:'center'}}>

              <Typography variant='h5' color='secondary.main' textAlign='center'>Made by eris00</Typography>

      </Box>

  )
}

export default Footer