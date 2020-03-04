import { createSelector } from '@reduxjs/toolkit';
import { mapValues } from 'lodash/fp';
import { changePlayer, toggleTimer } from '/store/timer';
import { connect } from 'react-redux';

const remainingTime = ({ timer: { remainingTime } }) => remainingTime;
const activePlayer = ({ timer: { activePlayer } }) => activePlayer;
const playerStats = ({ timer: { playerStats } }) => playerStats;

const buttonText = createSelector(
  ({ timer: { paused } }) => paused,
  paused => (paused ? 'Start' : 'Stop'),
);

const mapStateToProps = state =>
  mapValues(selector => selector(state), {
    remainingTime,
    activePlayer,
    playerStats,
    buttonText,
  });

const mapDispatchToProps = {
  changePlayer,
  toggleTimer,
};

export default connect(mapStateToProps, mapDispatchToProps);
