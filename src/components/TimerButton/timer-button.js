import React, { useCallback } from 'react';
import { Box, Button } from '@material-ui/core';
import connectProps from './props';

const TimerButton = ({ done, buttonLabel, toggleTimer, resetTimer }) => {
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
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default connectProps(TimerButton);
