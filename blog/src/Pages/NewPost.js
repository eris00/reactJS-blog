import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewPost({handleSubmit, setPostTitle, setPostDescription, setPostImage}) {
  return (
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    style={{ width: '80vw', margin:'0 auto', marginTop:'5vh' }} >

      <form onSubmit={handleSubmit}>
        <TextField 
          id='titlePost'
          label='title'
          type='text'
          variant="outlined"
          sx={{width:'100%', marginTop:'3%'}}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea 
          id='descPost'
          label='description'
          type='text'
          style={{width:'100%', height:'20vh', marginTop:'3%'}}
          onChange={(e) => setPostDescription(e.target.value)}
        />
        <TextField 
          id='imagePost'
          label='image url'
          type='text'
          sx={{width:'100%', padding: 0, marginTop:'3%'}}
          onChange={(e) => setPostImage(e.target.value)}
        />

        <Button type='submit' variant="contained" sx={{ margin:' 0 auto', marginTop:'5%'}} >Add post</Button>

      </form>
    </Grid>
  )
}

export default NewPost