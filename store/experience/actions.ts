import axios from "axios";
import { BaseURL, SUPABASE_API_KEY, EXPERIENCE } from "@/constants/endPoints";
import { experienceAction } from "./slice";
export const getExperience = function () {
  return async (dispatch: Function) => {
    dispatch(experienceAction.setLoading(true));
    try {
      const config = {
        url: `${BaseURL}${EXPERIENCE}`,
        method: "GET",
        timeout: 0,
        headers: {
          apikey: `${SUPABASE_API_KEY}`,
          Authorization: `Bearer ${SUPABASE_API_KEY}`,
        },
      };
      const response = await axios(config);

      dispatch(experienceAction.setData(response.data));
    } catch (error: any) {
      dispatch(experienceAction.setError(error));
    }
  };
};
