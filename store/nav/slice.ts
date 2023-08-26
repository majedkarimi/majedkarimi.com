import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navType } from "@/types/nav";
import { requestType } from "@/types/common";
import { sortData } from "@/helpers/healper";

const initialState: requestType<navType[]> = {
  loading: true,
  data: null,
  error: null,
};
export const navLinkSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setData(state, action: PayloadAction<navType[]>) {
      const sorted = sortData(action.payload);
      state.loading = false;
      state.error = null;
      state.data = sorted;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});
export const navLinkActions = navLinkSlice.actions;
export default navLinkSlice.reducer;
