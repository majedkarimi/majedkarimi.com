import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestType } from "@/types/common";
import { experienceType } from "@/types/experience";
const initialState: requestType<experienceType[]> = {
  loading: true,
  data: null,
  error: null,
};
export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setData(state, action: PayloadAction<experienceType[]>) {
      const sortedById = action.payload.slice().sort((a, b) => a.id - b.id);
      state.data = sortedById;
      state.loading = false;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
      state.data = null;
    },
  },
});
export const experienceAction = experienceSlice.actions;
export default experienceSlice.reducer;
