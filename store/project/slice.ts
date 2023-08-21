import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestType } from "@/types/common";
import { projectsType } from "@/types/projects";
import { sortData } from "@/helpers/healper";

const initialState: requestType<projectsType> = {
  loading: false,
  data: null,
  error: null,
};
export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setData(state, action: PayloadAction<projectsType[]>) {
      const sorted = sortData(action.payload);
      state.loading = false;
      state.data = sorted;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});
export const projectAction = projectSlice.actions;
export default projectSlice.reducer;
