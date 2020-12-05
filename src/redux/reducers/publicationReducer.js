import {
  ADD_PUBLICATION,
  EDIT_PUBLICATION,
  DELETE_PUBLICATION,
  SHOW_PUBLICATION,
} from "../actions/publicationsActions";


let initialState = [];

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
      return {
        ...state,
      };
    case SHOW_PUBLICATION:

      return {
      };

    default: //siempre debe estar por defecto un estado
      return state;
  }
};

export default publications;
