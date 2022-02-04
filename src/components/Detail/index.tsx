import React from 'react';
import { Box } from '@mui/material';
import NotFoundImage from '../../assets/notfound.jpeg';
import { ItemType } from '../../types/item.type';

interface Props {
  item: ItemType;
}

const Index = ({ item }: Props) => {
  return (
    <Box>
      <img
        src={item.photo || NotFoundImage}
        className='item-image-detail'
        alt='alttext'
      />
      <h1>{item.title || ''}</h1>
      <p>{item.description || ''}</p>
    </Box>
  );
};

export default Index;
