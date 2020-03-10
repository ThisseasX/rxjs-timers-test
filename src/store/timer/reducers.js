import { createSlice } from '@reduxjs/toolkit';
import { STARTING_TIME, SPEED, PLAYERS } from 'config';

const initialState = {
  done: false,
  paused: true,
  remainingTime: STARTING_TIME,
  activePlayer: null,
  playerStats: PLAYERS.map(player => ({
    name: player,
    played: 0,
  })),
};

const reducers = {
  changePlayer: (state, { payload }) => {
    if (state.activePlayer !== payload) {
      state.activePlayer = payload;
    } else {
      state.activePlayer = null;
    }
  },
  subtractTime: state => {
    state.remainingTime -= SPEED;
  },
  addPlaytime: state => {
    const activePlayerStats = state.playerStats.find(
      stat => stat.name === state.activePlayer,
    );
    if (activePlayerStats) activePlayerStats.played += SPEED;
  },
  toggleTimer: state => {
    state.paused = !state.paused;
  },
  setDone: state => {
    state.done = true;
  },
  resetTimer: () => {
    return initialState;
  },
};

const timerSlice = createSlice({
  name: 'timer',
  reducers,
  initialState,
});

export const { reducer: timerReducer } = timerSlice;

export const {
  addPlaytime,
  changePlayer,
  subtractTime,
  toggleTimer,
  setDone,
  resetTimer,
} = timerSlice.actions;
