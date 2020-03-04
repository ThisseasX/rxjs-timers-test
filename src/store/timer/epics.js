import { interval, empty } from 'rxjs';
import { mapTo, scan, switchMap, takeWhile, mergeMapTo } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { SPEED } from '/config';
import { subtractTime, addPlaytime, toggleTimer } from '/store/timer';

const timerEpic = (action$, state$) => {
  const interval$ = interval(SPEED).pipe(mapTo(SPEED));
  const remainingTime = state$.value.timer.remainingTime;
  const paused = state$.value.timer.paused;

  return action$.pipe(
    ofType(toggleTimer),
    scan(paused => !paused, paused),
    switchMap(paused => (paused ? empty() : interval$)),
    scan((remaining, i) => remaining - i, remainingTime),
    takeWhile(remaining => remaining >= 0),
    mergeMapTo([subtractTime(), addPlaytime()]),
  );
};

export default combineEpics(timerEpic);
