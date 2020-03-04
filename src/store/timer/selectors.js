import { createSelector } from '@reduxjs/toolkit';

const remainingTime = ({ timer: { remainingTime } }) => remainingTime;
const activePlayer = ({ timer: { activePlayer } }) => activePlayer;
const playerStats = ({ timer: { playerStats } }) => playerStats;

const buttonText = createSelector(
  ({ timer: { paused } }) => paused,
  paused => (paused ? 'Start' : 'Stop'),
);

export { remainingTime, activePlayer, playerStats, buttonText };
