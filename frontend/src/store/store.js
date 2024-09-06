import { configureStore } from '@reduxjs/toolkit';
import hackathonReducer from './card'; 



export const store = configureStore({
  reducer: {
    hackathon: hackathonReducer,
  },
});


