import { BehaviorSubject, interval, empty, of, from } from 'rxjs';
import {
  mapTo,
  scan,
  tap,
  switchMap,
  takeWhile,
  mergeMap,
  mergeMapTo,
  map,
} from 'rxjs/operators';
import { flow } from 'lodash/fp';
// import { playerReducer, playerActions, playerInitialState } from './player-reducer';
import { bindActionCreators } from 'redux';
import { SPEED, INITIALLY_PAUSED } from '/config';
import { combineEpics, ofType } from 'redux-observable';
import { subtractTime, addPlaytime, changePlayer } from '/store/timer';
import { get } from 'lodash/fp';
import store from '../../store';

const interval$ = interval(SPEED).pipe(mapTo(SPEED));

const awesomeEpic = (action$, state$) => {
  return state$.pipe(
    switchMap(({ timer: { paused, remainingTime } }) =>
      paused ? empty() : interval$.pipe(takeWhile(() => remainingTime > 0)),
    ),
    mergeMapTo([subtractTime(), addPlaytime()]),
  );
};

export default combineEpics(awesomeEpic);
