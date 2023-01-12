import { configureStore } from "@reduxjs/toolkit";
import ReducerSlice from "./reducer";
import listenerMiddleware from "./middleware";

export const store = configureStore({
  reducer: {
    crudapp: ReducerSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
