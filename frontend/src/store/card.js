import { createSlice } from '@reduxjs/toolkit';
import hackathonData from '../data';

const initialState = {
    data:hackathonData,
    searchData:hackathonData,
};


const hackathonSlice = createSlice({
  name: 'hackathon',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.data.push(action.payload);
      state.searchData = state.data;

    },
    
},  
});

export const { addCard } = hackathonSlice.actions;
export default hackathonSlice.reducer;
