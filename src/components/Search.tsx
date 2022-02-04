import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ onFilterChange, getItemsFromServer }: any) {
  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search here'
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => onFilterChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            getItemsFromServer();
            e.preventDefault();
          }
        }}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton
        onClick={getItemsFromServer}
        sx={{ p: '10px' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
