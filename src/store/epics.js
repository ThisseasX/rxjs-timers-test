import { combineEpics } from 'redux-observable';
import { timerEpic } from './timer';

export default combineEpics(timerEpic);
