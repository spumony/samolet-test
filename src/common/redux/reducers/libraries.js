import { GET_LIBRARIES_DATA, LIBRARIES_ERROR } from "../actions/types";

const initialState = {
  items: [],
  error: {},
};

const transformItems = (items) =>
  items.map(({ kopuk, address, libraries }) => ({
    id: kopuk,
    address,
    libraries,
  }));

const getLibrariesData = (state, libraries) => ({
  ...state,
  items: transformItems(libraries),
});

const librariesError = (state, error) => ({
  ...state,
  error,
});

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LIBRARIES_DATA:
      return getLibrariesData(state, payload);
    case LIBRARIES_ERROR:
      return librariesError(state, payload);
    default:
      return state;
  }
}
