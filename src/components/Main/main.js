import React from 'react';
import connectProps from './props';
import { PlayerCards, Timer, TimerButton } from '/components';

const Main = ({
  remainingTime,
  activePlayer,
  playerStats,
  buttonText,
  changePlayer,
  toggleTimer,
}) => (
  <>
    <Timer remainingTime={remainingTime} />
    <TimerButton toggleTimer={toggleTimer} buttonText={buttonText} />
    <PlayerCards
      activePlayer={activePlayer}
      changePlayer={changePlayer}
      playerStats={playerStats}
    />
  </>
);

export default connectProps(Main);
