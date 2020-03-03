import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { formatTime } from '/utils';

const Timer = ({ remainingTime }) => (
  <Box mt={4}>
    <Typography align={'center'} variant={'h1'}>
      {formatTime(remainingTime)}
    </Typography>
  </Box>
);

export default Timer;
