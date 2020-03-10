const remainingTime = ({ timer: { remainingTime } }) => remainingTime;
const activePlayer = ({ timer: { activePlayer } }) => activePlayer;
const playerStats = ({ timer: { playerStats } }) => playerStats;
const paused = ({ timer: { paused } }) => paused;
const done = ({ timer: { done } }) => done;

export { remainingTime, activePlayer, playerStats, paused, done };
