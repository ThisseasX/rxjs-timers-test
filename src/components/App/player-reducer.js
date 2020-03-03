import { createActions } from 'redux-actions';
import { createReducer } from '@reduxjs/toolkit';
import { STARTING_TIME, SPEED, PLAYERS } from './config';

const CHANGE_PLAYER = 'CHANGE_PLAYER';
const ADD_PLAYTIME = 'ADD_PLAYTIME';
const SUBTRACT_TIME = 'SUBTRACT_TIME';

const playerActions = createActions(CHANGE_PLAYER, SUBTRACT_TIME, ADD_PLAYTIME);

const playerInitialState = {
  remainingTime: STARTING_TIME,
  activePlayer: null,
  playerStats: PLAYERS.map(player => ({
    name: player,
    played: 0,
  })),
};

const playerReducer = createReducer(playerInitialState, {
  [CHANGE_PLAYER]: (state, { payload }) => {
    if (state.activePlayer !== payload) {
      state.activePlayer = payload;
    } else {
      state.activePlayer = null;
    }
  },
  [SUBTRACT_TIME]: state => {
    state.remainingTime -= SPEED;
  },
  [ADD_PLAYTIME]: state => {
    const activePlayerStats = state.playerStats.find(
      stat => stat.name === state.activePlayer,
    );
    if (activePlayerStats) activePlayerStats.played += SPEED;
  },
});

export { playerReducer, playerActions, playerInitialState };
