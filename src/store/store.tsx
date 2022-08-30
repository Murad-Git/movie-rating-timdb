import { configureStore } from '@reduxjs/toolkit';
import mediaSlice from './slices/mediaSlice';

export const store = configureStore({
  reducer: {
    media: mediaSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
