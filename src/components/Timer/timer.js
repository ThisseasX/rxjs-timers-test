import React from 'react';
import { Typography } from '@material-ui/core';
import { formatTime } from 'utils';

const Timer = ({ remainingTime }) => (
  <Typography align={'center'} variant={'h1'}>
    {formatTime(remainingTime)}
  </Typography>
);

export default Timer;
