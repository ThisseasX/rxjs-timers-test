import { flow, map } from 'lodash/fp';

const padZeroes = n => String(n).padStart(2, '0');
const concatTime = t => `${t[0]}:${t[1]}.${t[2]}`;
const finalTime = flow(map(padZeroes), concatTime);

const formatTime = ms => {
  const msec = (ms % 1000) / 10;
  const sec = Math.floor(ms / 1000);
  const seconds = sec % 60;
  const minutes = Math.floor(sec / 60);

  return finalTime([minutes, seconds, msec]);
};

export { formatTime };
