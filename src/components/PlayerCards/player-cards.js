import React from 'react';
import { Box, Typography, Paper, Grid } from '@material-ui/core';
import { formatTime } from '/utils';

const PlayerCards = ({ activePlayer, playerStats, changePlayer }) => (
  <Box mt={4}>
    <Grid justify={'center'} container spacing={4}>
      {playerStats.map(stat => (
        <Grid item key={stat.name}>
          <Box
            px={4}
            py={2}
            style={{ cursor: 'pointer' }}
            border={
              activePlayer === stat.name
                ? '2px solid #3f51b5'
                : '2px solid transparent'
            }
            clone
          >
            <Paper onClick={changePlayer.bind(null, stat.name)}>
              <Typography variant={'h3'} gutterBottom>
                {stat.name}
              </Typography>
              <Typography variant={'h4'}>{formatTime(stat.played)}</Typography>
            </Paper>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default PlayerCards;
