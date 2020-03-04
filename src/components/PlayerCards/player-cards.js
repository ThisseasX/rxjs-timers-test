import React, { useCallback } from 'react';
import { Box, Typography, Paper, Grid } from '@material-ui/core';
import { formatTime } from 'utils';

const PlayerCard = ({ stat, activePlayer, changePlayer }) => {
  const handleClick = useCallback(() => {
    changePlayer(stat.name);
  }, [changePlayer, stat]);

  return (
    <Grid item>
      <Box
        px={4}
        py={2}
        style={{ cursor: 'pointer' }}
        border={
          activePlayer === stat.name ? '2px solid #3f51b5' : '2px solid transparent'
        }
        clone
      >
        <Paper onClick={handleClick}>
          <Typography variant={'h3'} gutterBottom>
            {stat.name}
          </Typography>
          <Typography variant={'h4'}>{formatTime(stat.played)}</Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

const PlayerCards = ({ activePlayer, playerStats, changePlayer }) => (
  <Box mt={4}>
    <Grid justify={'center'} container spacing={4}>
      {playerStats.map(stat => (
        <PlayerCard
          key={stat.name}
          stat={stat}
          activePlayer={activePlayer}
          changePlayer={changePlayer}
        />
      ))}
    </Grid>
  </Box>
);

export default PlayerCards;
