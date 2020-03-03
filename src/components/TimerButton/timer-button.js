import React from 'react';
import { Box, Button } from '@material-ui/core';

const TimerButton = ({ handleClick, buttonText }) => (
  <Box mt={2} display={'flex'} justifyContent={'center'}>
    <Button variant={'contained'} color={'primary'} onClick={handleClick}>
      {buttonText}
    </Button>
  </Box>
);

export default TimerButton;
