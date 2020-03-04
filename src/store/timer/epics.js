import { BehaviorSubject, interval, empty } from 'rxjs';
import { mapTo, scan, tap, switchMap, takeWhile } from 'rxjs/operators';
import { flow } from 'lodash/fp';
// import { playerReducer, playerActions, playerInitialState } from './player-reducer';
import { bindActionCreators } from 'redux';
import { SPEED, INITIALLY_PAUSED } from '/config';
import { combineEpics, ofType } from 'redux-observable';

const awesomeEpic = () => {
  // const interval$ = interval(SPEED).pipe(mapTo(SPEED));
  // const pause$ = useRef(new BehaviorSubject(INITIALLY_PAUSED));
  // const sub = pause$.current
  //   .pipe(
  //     tap(changeButtonText),
  //     switchMap(paused => (paused ? empty() : interval$)),
  //     scan((remaining, i) => remaining - i, remainingTime),
  //     takeWhile(remaining => remaining >= 0),
  //     tap(subtractTime),
  //     tap(addPlaytime),
  //   )
  //   .subscribe();
  return empty();
};

export default combineEpics(awesomeEpic);
