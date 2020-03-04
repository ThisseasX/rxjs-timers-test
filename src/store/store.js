import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
const defaultMiddleware = getDefaultMiddleware({ thunk: false });

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware, ...defaultMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;
