import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestType } from "@/types/common";
import { techType } from "@/types/tech";
const initialState: requestType<techType> = {
  loading: false,
  error: null,
  data: null,
};
export const stechSlice = createSlice({
  name: "tech",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setData(state, action: PayloadAction<techType[]>) {
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
export const skillActions = stechSlice.actions;
export default stechSlice.reducer;
