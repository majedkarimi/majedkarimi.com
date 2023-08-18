import axios from "axios";
import { navLinkActions } from "./slice";
import { BaseURL, NAV, SUPABASE_API_KEY } from "@/constants/endPoints";
export const getNavLinks = function () {
  return async (dispatch: Function) => {
    dispatch(navLinkActions.setLoading(true));
    const config = {
      url: `${BaseURL}${NAV}`,
      method: "GET",
      timeout: 0,
      headers: {
        apikey: `${SUPABASE_API_KEY}`,
        Authorization: `Bearer ${SUPABASE_API_KEY}`,
      },
    };
    const response = await axios(config);
    dispatch(navLinkActions.setData(response.data));
  };
};
