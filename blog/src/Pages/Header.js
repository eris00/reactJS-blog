import './styles/main.css';
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header({ title }) {
 
  return (
    <>

      <Box className='headerDiv' bgcolor="primary.main" >
        <Typography className='titleText' variant='h1' color="secondary.main" fontWeight='typography.fontWeightLight' fontSize='2.6em'>{title}</Typography>
      </Box>
    </>
  )
}

export default Header