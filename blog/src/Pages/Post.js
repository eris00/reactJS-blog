import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Post = ({singlePost}) => {
  return (

    <Card sx={{ maxWidth: 345}}>
        <Link to={`post/${singlePost.id}`}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={singlePost.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {singlePost.title}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                        {(singlePost.description).length <= 25 ? singlePost.description : `${(singlePost.description).slice(0, 45)}...`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Link>
    </Card>

  )
}

export default Post