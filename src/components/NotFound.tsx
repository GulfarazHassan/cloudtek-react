import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

interface Props {
  text: string;
}

const NotFound = ({ text }: Props) => {
  return (
    <Box sx={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h4' gutterBottom component='div'>
        {text}
      </Typography>
    </Box>
  );
};

export default NotFound;
