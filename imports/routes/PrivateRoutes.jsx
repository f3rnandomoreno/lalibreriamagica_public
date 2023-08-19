import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import the pages

// // import the context
// import { AuthProvider } from "../context/AuthContext";

export const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>test</div>
        </Route>
        <Route path="*">
          <div>test not found</div>
        </Route>
        {/* <Route path="/login" component={Login} /> */}
        {/* <PrivateRoute path="/profile" component={Profile} /> */}
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  );
};
