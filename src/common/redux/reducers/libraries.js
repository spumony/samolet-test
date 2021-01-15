import { GET_LIBRARIES_DATA } from "../actions/types";

const initialState = {
  items: [],
  error: {},
  loading: true,
};

const transformItems = (items) =>
  items.map(({ kopuk, address, libraries }) => ({
    id: kopuk,
    address,
    libraries,
  }));

const getLibrariesData = (state, libraries) => ({
  ...state,
  loading: false,
  items: transformItems(libraries),
});

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LIBRARIES_DATA:
      return getLibrariesData(state, payload);

    default:
      return state;
  }
}
