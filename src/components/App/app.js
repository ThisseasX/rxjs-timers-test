import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { Main } from '/components';
import store from '/store';

const App = () => (
  <Provider store={store}>
    <CssBaseline>
      <Main />
    </CssBaseline>
  </Provider>
);

export default App;
