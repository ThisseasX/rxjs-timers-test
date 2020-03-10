import React, { useCallback } from 'react';
import { Box, Button } from '@material-ui/core';

const TimerButton = ({ paused, done, toggleTimer, resetTimer }) => {
  const handleClick = useCallback(() => {
    done ? resetTimer() : toggleTimer();
  }, [done, toggleTimer, resetTimer]);

  return (
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <Box width={1} clone>
        <Button
          variant={'contained'}
          size={'large'}
          color={'primary'}
          onClick={handleClick}
        >
          {done ? 'Reset' : paused ? 'Start' : 'Stop'}
        </Button>
      </Box>
    </Box>
  );
};

export default TimerButton;
