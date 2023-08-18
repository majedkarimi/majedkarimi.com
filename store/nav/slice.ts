import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navType } from "@/types/nav";
import { requestType } from "@/types/common";

const initialState: requestType<navType> = {
  loading: false,
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
      state.loading = false;
      state.error = null;
      state.data = action.payload;
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
