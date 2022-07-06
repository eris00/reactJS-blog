import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const PostPage = ({ post, handleDelete }) => {

  const { id } = useParams();
  const singlePost = post.find(singlePost => (singlePost.id).toString() === id);

  return (
    <div>
      {singlePost && 
        <>
          <h2>{singlePost.title}</h2>
          <CardMedia
            component="img"
            height="200"
            width="50"
            image={singlePost.image}
            alt="green iguana"
          />

          <Box>
            <Typography variant="p" color="text.secondary">
                          {singlePost.description}
            </Typography>
          </Box>

            <Button 
              variant="outlined" 
              onClick={() => handleDelete(singlePost.id)}
              startIcon={<DeleteIcon />}>
              Delete
            </Button>

            <Link to={`/edit/${post.id}`}>
              <Button variant="outlined">Edit</Button>
            </Link>
        </>
      }

    {!singlePost && 
      <>
        <Typography>There is no post</Typography>
        <Link to='/'>Back to home</Link>
      </>
    }
    </div>
  )
}

export default PostPage