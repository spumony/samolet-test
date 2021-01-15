import { GET_LIBRARIES_DATA } from "./types";
import { getData } from "../../../api";

export const getLibrariesData = () => async (dispatch) => {
  try {
    const res = await getData();

    dispatch({
      type: GET_LIBRARIES_DATA,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};
