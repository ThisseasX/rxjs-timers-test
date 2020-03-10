import React, { memo } from 'react';
import { Container, Box } from '@material-ui/core';
import { PlayerCards, Timer, TimerButton } from 'components';

const Main = () => (
  <Box py={4} display={'flex'} alignItems={'center'} flexDirection={'column'} clone>
    <Container maxWidth={'md'}>
      <div>
        <Timer />
        <TimerButton />
      </div>
      <PlayerCards />
    </Container>
  </Box>
);

export default memo(Main);
