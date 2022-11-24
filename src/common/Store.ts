import { configureStore } from '@reduxjs/toolkit';
import screenShowReducer from './ScreenShowSlice';

export const store = configureStore({
  reducer: {
    screenShows: screenShowReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch