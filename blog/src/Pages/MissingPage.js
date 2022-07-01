import React from 'react'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function MissingPage() {
  return (
    <Box>
      
      <Typography>Missing page</Typography>
      <Link to='/' >
        <Typography>Go back to home</Typography>
      </Link>

    </Box>
  )
}

export default MissingPage