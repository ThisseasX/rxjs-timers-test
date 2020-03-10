import { mapValues } from 'lodash/fp';

const composeSelectors = selectors => state =>
  mapValues(selector => selector(state), selectors);

export { composeSelectors };
