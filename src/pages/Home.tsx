import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from '@mui/material';
import Search from '../components/Search';
import Item from '../components/Item';
import useFetch from '../hooks/useFetch';
import { ItemType } from '../types/item.type';
import NotFound from '../components/NotFound';

const Home = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const { data, showLoading, getItems } = useFetch(
    `/item/search?title=${searchText}`
  );

  useEffect(() => {
    setItems(data);
    setLoading(showLoading);
  }, [data, showLoading]);

  const onFilterChange = useCallback((value: string) => {
    setSearchText(value);
  }, []);

  const getItemsFromServer = () => {
    getItems();
  };

  return (
    <Container>
      <Box
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <Typography variant='h6' gutterBottom component='div'>
          Search Engine
        </Typography>
        <Search
          onFilterChange={onFilterChange}
          getItemsFromServer={getItemsFromServer}
        />
      </Box>

      {data && data.length > 0 ? (
        <Box sx={{ marginTop: '3rem' }}>
          <Grid container spacing={2}>
            {items.map((data, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index + 1}>
                <Item item={data} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : !loading ? (
        <NotFound text={`Items with title "${searchText}" not found`} />
      ) : (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}
        >
          <CircularProgress size={50} />
        </Box>
      )}
    </Container>
  );
};

export default Home;
