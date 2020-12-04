export const ADD_PUBLICATION = "ADD_PUBLICATION";
export const EDIT_PUBLICATION = "EDIT_PUBLICATION";
export const DELETE_PUBLICATION = "DELETE_PUBLICATION";
export const SHOW_PUBLICATION = "SHOW_PUBLICATION";

export const addPublication = () => {
  return {
    type: ADD_PUBLICATION,
  };
};

export const editPublication = () => {
  return {
    type: EDIT_PUBLICATION,
  };
};

export const deletePublication = () => {
  return {
    type: DELETE_PUBLICATION,
  };
};

export const showPublication = () => {
  return {
    type: SHOW_PUBLICATION,
  };
};