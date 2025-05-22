import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/sliceCounter'; 
const store = configureStore({
  reducer: {
    counter: counterSlice
  }
});

export default store;