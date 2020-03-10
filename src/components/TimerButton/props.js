import { connect } from 'react-redux';
import { toggleTimer, resetTimer } from 'store/timer';
import { composeSelectors } from 'utils';
import { done, buttonLabel } from 'store/timer/selectors';

const mapStateToProps = composeSelectors({
  done,
  buttonLabel,
});

const mapDispatchToProps = {
  toggleTimer,
  resetTimer,
};

export default connect(mapStateToProps, mapDispatchToProps);
