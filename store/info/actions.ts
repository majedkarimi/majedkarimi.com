import axios from "axios";
import { infoActions } from "./slice";
import { BaseURL, INFO, SUPABASE_API_KEY } from "@/constants/endPoints";
export const getInfo = function () {
  return async (dispatch: Function) => {
    try {
      dispatch(infoActions.setLoading(true));
      const config = {
        url: `${BaseURL}${INFO}`,
        method: "GET",
        timeout: 0,
        headers: {
          apikey: `${SUPABASE_API_KEY}`,
          Authorization: `Bearer ${SUPABASE_API_KEY}`,
        },
      };
      const response = await axios(config);

      dispatch(infoActions.setDatainfo(response.data[0]));
    } catch (error: any) {
      dispatch(infoActions.setError(error));
    }
  };
};
