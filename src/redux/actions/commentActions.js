export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const SHOW_COMMENT = "SHOW_COMMENT";

export const addComment = () => {
  return {
    type: ADD_COMMENT,
  };
};

export const editComment = () => {
  return {
    type: EDIT_COMMENT,
  };
};

export const deleteComment = () => {
  return {
    type: DELETE_COMMENT,
  };
};

export const showComment = () => {
  return {
    type: SHOW_COMMENT,
  };
};
