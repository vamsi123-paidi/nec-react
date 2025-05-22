import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/PostsSlice';

const Store = configureStore({
  reducer: {
    posts: postsReducer
  }
});

export default Store;