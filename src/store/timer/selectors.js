import { createSelector } from '@reduxjs/toolkit';

const remainingTime = ({ timer: { remainingTime } }) => remainingTime;
const activePlayer = ({ timer: { activePlayer } }) => activePlayer;
const playerStats = ({ timer: { playerStats } }) => playerStats;
const paused = ({ timer: { paused } }) => paused;
const done = ({ timer: { done } }) => done;

const buttonLabel = createSelector(
  paused, 
  done,
  (paused, done) =>
    done ? 'Reset' : paused ? 'Start' : 'Stop',
);

export { remainingTime, activePlayer, playerStats, paused, done, buttonLabel };
