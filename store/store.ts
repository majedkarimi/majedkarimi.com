import { configureStore } from "@reduxjs/toolkit";
import navLinkSlice from "./nav/slice";
import experienceSlice from "./experience/slice";
import techSlice from "./tech/slice";
import projectSlice from "./project/slice";
import infoSlice from "./info/slice";
export const store = configureStore({
  reducer: {
    nav: navLinkSlice,
    experience: experienceSlice,
    tech: techSlice,
    project: projectSlice,
    info: infoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
