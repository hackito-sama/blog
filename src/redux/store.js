import { createStore } from "redux";
import publications from "./reducers/publicationReducer";

const store = createStore(publications);

export default store;
