import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import transactionsSlice from './transactionsSlice';

const reducer = combineReducers({
  transactions: transactionsSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    preloadedState,
  });
}

const store = setupStore();
export default store;
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
