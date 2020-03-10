import { connect } from 'react-redux';
import { toggleTimer, resetTimer } from 'store/timer';
import { composeSelectors } from 'utils';
import { paused, done } from 'store/timer/selectors';

const mapStateToProps = composeSelectors({
  paused,
  done,
});

const mapDispatchToProps = {
  toggleTimer,
  resetTimer,
};

export default connect(mapStateToProps, mapDispatchToProps);
