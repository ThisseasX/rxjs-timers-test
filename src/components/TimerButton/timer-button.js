import React, { useCallback } from 'react';
import { Box, Button } from '@material-ui/core';

const TimerButton = ({ toggleTimer, buttonText }) => {
  const handleClick = useCallback(() => {
    toggleTimer();
  }, []);

  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <Button variant={'contained'} color={'primary'} onClick={handleClick}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default TimerButton;
