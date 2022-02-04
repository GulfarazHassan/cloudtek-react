import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/notfound.jpeg';
import { ItemType } from '../types/item.type';

interface Props {
  item: ItemType;
}

export default function Item({ item }: Props) {
  return (
    <Card className='card-style'>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <img
            src={item.photo || NotFoundImage}
            alt='Item img'
            className='item-image'
          />
          <Box sx={{ marginLeft: '5px' }}>
            <Typography gutterBottom variant='h5' component='div'>
              {item.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {item.shortDescription}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`/detail/${item._id}`} className='link-sty'>
          <Button size='small'>Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
