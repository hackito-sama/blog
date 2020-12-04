import {
  ADD_PUBLICATION,
  EDIT_PUBLICATION,
  DELETE_PUBLICATION,
  SHOW_PUBLICATION,
} from "../actions/publicationsActions";

import { getPublications } from "../../services/publications";

const data = getPublications();
console.log(data)
const initialState = {};

const publications = (state = initialState, action) => {
  switch (action) {
    case ADD_PUBLICATION:
      console.log("reducer add publication");
      return {
        ...state,
      };
    case EDIT_PUBLICATION:
      console.log("edit publication");
      return {
        ...state,
      };
    case DELETE_PUBLICATION:
      console.log("delete show publication");
      return {
        ...state,
      };
    case SHOW_PUBLICATION:
      console.log("reducer show publication");
      return {
        ...state,
      };

    default: //siempre debe estar por defecto un estado
      return state;
  }
};

export default publications;
