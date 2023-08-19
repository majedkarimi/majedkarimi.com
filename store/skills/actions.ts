import axios from "axios";
import { SUPABASE_API_KEY, SKILLS, BaseURL } from "@/constants/endPoints";
import { skillActions } from "./slice";
export const getSkills = function () {
  return async (dispatch: Function) => {
    dispatch(skillActions.setLoading(true));
    try {
      const config = {
        url: `${BaseURL}${SKILLS}`,
        method: "GET",
        timeout: 0,
        headers: {
          apikey: SUPABASE_API_KEY,
          Autthorization: `Baerer ${SUPABASE_API_KEY}`,
        },
      };
      const response = await axios(config);
      dispatch(skillActions.setData(response.data));
    } catch (error: any) {
      dispatch(skillActions.setError(error));
    }
  };
};
