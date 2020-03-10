import { flow, map, mapValues } from 'lodash/fp';

const padZeroes = timeSegment => String(timeSegment).padStart(2, '0');
const concatTime = ([minutes, seconds, msec]) => `${minutes}:${seconds}.${msec}`;
const formattedTime = flow(map(padZeroes), concatTime);

const formatTime = ms => {
  const msec = (ms % 1000) / 10;
  const sec = Math.floor(ms / 1000);
  const seconds = sec % 60;
  const minutes = Math.floor(sec / 60);

  return formattedTime([minutes, seconds, msec]);
};

const composeSelectors = selectors => state =>
  mapValues(selector => selector(state), selectors);

export { formatTime, composeSelectors };
