import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { flow } from 'lodash/fp';

const theme = flow(
  createMuiTheme,
  responsiveFontSizes,
)({
  // Theming may be added in the future
});

export default theme;
