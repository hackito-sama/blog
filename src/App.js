import React from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
