import { configureStore } from "@reduxjs/toolkit";
import navLinkSlice from "./nav/slice";
import experienceSlice from "./experience/slice";
import skillsSlice from "./skills/slice";
export const store = configureStore({
  reducer: {
    nav: navLinkSlice,
    experience: experienceSlice,
    skill: skillsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
