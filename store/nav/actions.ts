import axios from "axios";
import { navLinkActions } from "./slice";
import { BaseURL, NAV } from "@/constants/endPoints";
export const getNavLinks = function () {
  return async (dispatch: Function) => {
    dispatch(navLinkActions.setLoading(true));
    const config = {
      url: `${BaseURL}${NAV}`,
      method: "GET",
      timeout: 0,
      headers: {
        apikey: `${process.env.NEXT_PUBLIC_API_KEY}`,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    };
    const response = await axios(config);
    dispatch(navLinkActions.setData(response.data));
  };
};
