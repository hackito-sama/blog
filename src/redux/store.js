import { createStore } from "redux";
import comments from "./reducers/publicationReducer";

const store = createStore(comments);

export default store;
