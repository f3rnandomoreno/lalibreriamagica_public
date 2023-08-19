import React from "react";

import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { App } from "../imports/ui/App";

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  ReactDOM.render(<App />, container);
});
