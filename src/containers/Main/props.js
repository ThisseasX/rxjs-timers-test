import { connect } from 'react-redux';
import { changePlayer, toggleTimer, resetTimer } from 'store/timer';
import { composeSelectors } from 'utils';

import {
  remainingTime,
  activePlayer,
  playerStats,
  paused,
  done,
} from 'store/timer/selectors';

const mapStateToProps = composeSelectors({
  remainingTime,
  activePlayer,
  playerStats,
  paused,
  done,
});

const mapDispatchToProps = {
  changePlayer,
  toggleTimer,
  resetTimer,
};

export default connect(mapStateToProps, mapDispatchToProps);
