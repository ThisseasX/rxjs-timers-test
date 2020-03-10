import React from 'react';
import connectProps from './props';
import { Container, Box } from '@material-ui/core';
import { PlayerCards, Timer, TimerButton } from 'components';

const Main = ({
  remainingTime,
  activePlayer,
  playerStats,
  paused,
  done,
  changePlayer,
  toggleTimer,
  resetTimer,
}) => (
  <Box py={4} display={'flex'} alignItems={'center'} flexDirection={'column'} clone>
    <Container maxWidth={'md'}>
      <div>
        <Timer remainingTime={remainingTime} />
        <TimerButton
          toggleTimer={toggleTimer}
          paused={paused}
          done={done}
          resetTimer={resetTimer}
        />
      </div>
      <PlayerCards
        activePlayer={activePlayer}
        changePlayer={changePlayer}
        playerStats={playerStats}
      />
    </Container>
  </Box>
);

export default connectProps(Main);
