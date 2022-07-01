import React from 'react'
import Feed from './Feed'
import { Typography } from '@mui/material';

function Home({post}) {
  return (
    <main>
      { 
        post.length ? ( 
          <Feed post={post}/>
        ) : ( <Typography>No posts</Typography> )
      }
    </main>
  )
}

export default Home