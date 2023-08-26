import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { infoType } from "@/types/info";
import { requestType } from "@/types/common";

const initialState: requestType<infoType> = {
  loading: true,
  data: null,
  error: null,
};
export const infoSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setDatainfo(state, action: PayloadAction<infoType>) {
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
export const infoActions = infoSlice.actions;
export default infoSlice.reducer;
