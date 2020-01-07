import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import * as go from "gojs";

const gojsKey = process.env.REACT_APP_GOJS_KEY;

if (gojsKey) {
  go.licenseKey = gojsKey;
}

ReactDOM.render(<App />, document.getElementById("root"));
