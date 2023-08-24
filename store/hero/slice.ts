import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { heroType } from "@/types/hero";
import { requestType } from "@/types/common";

const initialState: requestType<heroType> = {
  loading: true,
  data: null,
  error: null,
};
export const heroSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setDataHero(state, action: PayloadAction<heroType[]>) {
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
export const heroActions = heroSlice.actions;
export default heroSlice.reducer;
