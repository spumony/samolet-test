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

// http://localhost:3000/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json
// http://localhost:3000/library/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json
