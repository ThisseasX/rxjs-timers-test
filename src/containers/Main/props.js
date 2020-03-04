import { connect } from 'react-redux';
import { changePlayer, toggleTimer } from '/store/timer';
import { composeSelectors } from '/utils';
import {
  remainingTime,
  activePlayer,
  playerStats,
  buttonText,
} from '/store/timer/selectors';

const mapStateToProps = composeSelectors({
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
