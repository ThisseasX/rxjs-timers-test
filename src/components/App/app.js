import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Main } from '/containers';
import { store } from '/store';
import { theme } from '/styles';
import useStyles from './styles';

const App = () => {
  useStyles();

  return (
    <Provider store={store}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  );
};

export default App;
