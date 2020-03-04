import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  '@global': {
    [['html', 'body', '#root']]: {
      height: '100%',
    },
    body: {
      margin: 0,
    },
    ':root': {
      userSelect: 'none',
    },
  },
});

export default useStyles;
