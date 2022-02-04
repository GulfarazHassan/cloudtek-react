import React, { useState, useEffect } from 'react';
import { Container, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import useFetch from '../hooks/useFetch';
import DetailInfo from '../components/Detail/index';
import { ItemType } from '../types/item.type';

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState<ItemType>({
    createdAt: '',
    description: '',
    photo: '',
    shortDescription: '',
    title: '',
    updatedAt: '',
    _id: '',
  });
  const [loading, setLoading] = useState(false);
  const { data, showLoading } = useFetch(`/item/${id}`);

  useEffect(() => {
    setItem(data);
    setLoading(showLoading);
  }, [data, showLoading]);
  return (
    <Container sx={{ overflowX: 'hidden' }}>
      <Box sx={{ margin: '2rem' }}>
        <Link to='/' className='link-sty '>
          <Button />
        </Link>
      </Box>
      {loading ? (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}
        >
          <CircularProgress size={50} />
        </Box>
      ) : (
        <DetailInfo item={item} />
      )}
    </Container>
  );
};

export default Detail;
