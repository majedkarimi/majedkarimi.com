import axios from "axios";
import { heroActions } from "./slice";
import { BaseURL, HERO, SUPABASE_API_KEY } from "@/constants/endPoints";
export const getHero = function () {
  return async (dispatch: Function) => {
    try {
      dispatch(heroActions.setLoading(true));
      const config = {
        url: `${BaseURL}${HERO}`,
        method: "GET",
        timeout: 0,
        headers: {
          apikey: `${SUPABASE_API_KEY}`,
          Authorization: `Bearer ${SUPABASE_API_KEY}`,
        },
      };
      const response = await axios(config);

      dispatch(heroActions.setDataHero(response.data));
    } catch (error: any) {
      dispatch(heroActions.setError(error));
    }
  };
};
