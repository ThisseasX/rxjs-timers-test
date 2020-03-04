import React, { useCallback } from 'react';
import { Box, Button } from '@material-ui/core';

const TimerButton = ({ toggleTimer, buttonText }) => {
  const handleClick = useCallback(() => {
    toggleTimer();
  }, [toggleTimer]);

  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <Box width={1} clone>
        <Button
          variant={'contained'}
          size={'large'}
          color={'primary'}
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default TimerButton;
