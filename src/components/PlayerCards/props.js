import { connect } from 'react-redux';
import { changePlayer } from 'store/timer';
import { composeSelectors } from 'utils';
import { activePlayer, playerStats } from 'store/timer/selectors';

const mapStateToProps = composeSelectors({
  activePlayer,
  playerStats,
});

const mapDispatchToProps = {
  changePlayer,
};

export default connect(mapStateToProps, mapDispatchToProps);
