import React, { useState, useEffect, useRef, useCallback, useReducer } from 'react';
import { BehaviorSubject, interval, empty } from 'rxjs';
import { mapTo, scan, tap, switchMap, takeWhile } from 'rxjs/operators';
import { flow } from 'lodash/fp';
import { playerReducer, playerActions, playerInitialState } from './player-reducer';
import { bindActionCreators } from 'redux';
import { SPEED, INITIAL_PAUSE } from './config';
import { CssBaseline } from '@material-ui/core';
import { PlayerCards, Timer, TimerButton } from '/components';

const getButtonText = paused => (paused ? 'Start' : 'Stop');

const App = () => {
  const pause$ = useRef(new BehaviorSubject(INITIAL_PAUSE));

  const [buttonText, setButtonText] = flow(getButtonText, useState)(INITIAL_PAUSE);

  const [{ remainingTime, activePlayer, playerStats }, playerDispatch] = useReducer(
    playerReducer,
    playerInitialState,
  );

  const { changePlayer, subtractTime, addPlaytime } = bindActionCreators(
    playerActions,
    playerDispatch,
  );

  const handleClick = useCallback(() => {
    pause$.current.next(!pause$.current.value);
  }, []);

  const changeButtonText = useCallback(flow(getButtonText, setButtonText), []);

  useEffect(() => {
    const interval$ = interval(SPEED).pipe(mapTo(SPEED));

    const sub = pause$.current
      .pipe(
        tap(changeButtonText),
        switchMap(paused => (paused ? empty() : interval$)),
        scan((remaining, i) => remaining - i, remainingTime),
        takeWhile(remaining => remaining >= 0),
        tap(subtractTime),
        tap(addPlaytime),
      )
      .subscribe();

    return sub.unsubscribe.bind(sub);
  }, []);

  return (
    <CssBaseline>
      <Timer remainingTime={remainingTime} />
      <TimerButton handleClick={handleClick} buttonText={buttonText} />
      <PlayerCards
        activePlayer={activePlayer}
        changePlayer={changePlayer}
        playerStats={playerStats}
      />
    </CssBaseline>
  );
};

export default App;
