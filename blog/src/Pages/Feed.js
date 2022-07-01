import React from 'react'
import Post from './Post'
import Stack from '@mui/material/Stack';

function Feed({post}) {
  return (
    <>
    {
        post.map((singlePost) => (
            <Stack direction="row" spacing={2} key={singlePost.id} m={5} >
                <Post singlePost={singlePost}  />
            </Stack>
        ))
    }   
    </>
  )
}

export default Feed