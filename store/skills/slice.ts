import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestType } from "@/types/common";
import { skillsType } from "@/types/skills";
const initialState: requestType<skillsType> = {
  loading: false,
  error: null,
  data: null,
};
export const skillsSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setData(state, action: PayloadAction<skillsType[]>) {
      const sortedById = action.payload.slice().sort((a, b) => a.id - b.id);
      state.loading = false;
      state.error = null;
      state.data = sortedById;
    },
    setError(state, action: PayloadAction<string>) {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const skillActions = skillsSlice.actions;
export default skillsSlice.reducer;
