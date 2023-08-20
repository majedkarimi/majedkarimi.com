import axios from "axios";
import { SUPABASE_API_KEY, PROJECTS, BaseURL } from "@/constants/endPoints";
import { projectAction } from "./slice";
export const getProjects = function () {
  return async (dispatch: Function) => {
    dispatch(projectAction.setLoading(true));
    try {
      const config = {
        url: `${BaseURL}${PROJECTS}`,
        method: "GET",
        timeout: 0,
        headers: {
          apikey: SUPABASE_API_KEY,
          Authorization: `Bearer ${SUPABASE_API_KEY}`,
        },
      };
      const response = await axios(config);
      dispatch(projectAction.setData(response.data));
    } catch (error: any) {
      dispatch(projectAction.setError(error));
    }
  };
};
