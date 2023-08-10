import { configureStore } from '@reduxjs/toolkit';

import plants from '../reducers/reducers';

export const store = configureStore({
  reducer: {plants}
})