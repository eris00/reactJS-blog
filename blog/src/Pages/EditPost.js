import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditPost = ({post, handleEdit, setEditTitle, setEditDescription, setEditImage, editTitle, editDescription, editImage}) => {

    const { id } = useParams();

    const singlePost = post.find(singlePost => (singlePost.id).toString() === id);

    useEffect(() => {
        if(singlePost) {
            setEditTitle(singlePost.title);
            setEditDescription(singlePost.description);
            setEditImage(singlePost.image);
        }
    }, [singlePost, setEditTitle, setEditDescription, setEditImage])

  return (

        <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ width: '80vw', margin:'0 auto', marginTop:'5vh' }} >
            {editTitle &&
                <>
                    <form onSubmit={(e) => e.preventDefault()}>
                    <TextField 
                        id='titlePost'
                        label='title'
                        type='text'
                        variant="outlined"
                        sx={{width:'100%', marginTop:'3%'}}
                        onChange={(e) => setEditTitle(e.target.value)}
                        value={editTitle}
                    />
                    <textarea 
                        id='descPost'
                        label='description'
                        type='text'
                        style={{width:'100%', height:'20vh', marginTop:'3%'}}
                        onChange={(e) => setEditDescription(e.target.value)}
                        value={editDescription}
                    />
                    <TextField 
                        id='imagePost'
                        label='image url'
                        type='text'
                        sx={{width:'100%', padding: 0, marginTop:'3%'}}
                        onChange={(e) => setEditImage(e.target.value)}
                        value={editImage}
                    />
                    
                    <Link to={`/edit/${singlePost.id}`}>
                        <Button 
                            type='submit' 
                            onClick={() => handleEdit(singlePost.id)} 
                            variant="contained" 
                            sx={{ margin:' 0 auto', marginTop:'5%'}} 
                            >Save changes
                        </Button>
                    </Link>

                    </form>
                </>
            }
        </Grid>
        
   
    // {!singlePost &&
    //     <>
    //         <Typography>There is no post</Typography>
    //         <Link to='/'>Go to home</Link>
    //     </>
    // }

  )
}

export default EditPost