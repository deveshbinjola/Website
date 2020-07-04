import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import About from "views/About.js";
import Blog from "views/Blog.js";
import CreditAdvice from "views/CreditAdvice.js";
import DigitalNomad from "views/DigitalNomad.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/about"
        render={(props) => <About {...props} />}
      />
      <Route
        path="/blog"
        render={(props) => <Blog {...props} />}
      />
      <Route
        path="/creditadvice"
        render={(props) => <CreditAdvice {...props} />}
      />
      <Route
        path="/digitalnomad"
        render={(props) => <DigitalNomad {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
