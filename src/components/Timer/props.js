import { connect } from 'react-redux';
import { composeSelectors } from 'utils';
import { remainingTime } from 'store/timer/selectors';

const mapStateToProps = composeSelectors({
  remainingTime,
});

export default connect(mapStateToProps);
