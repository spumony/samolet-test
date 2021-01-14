import axios from "axios";
import { GET_LIBRARIES_DATA, LIBRARIES_ERROR } from "./types";
import { getData } from "../../../api";

export const getLibrariesData = () => async (dispatch) => {
  try {
    const res = await getData();

    dispatch({
      type: GET_LIBRARIES_DATA,
      payload: res,
    });
  } catch (err) {
    // dispatch({
    //   type: LIBRARIES_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
    console.log(err);
  }
};
