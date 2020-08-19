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
import TravelBlog from "views/TravelBlog.js";
import TravelTips from "views/TravelTips";
import Hiking from "views/Hiking";
import Iceland from "views/blog/Iceland";
import Switzerland from "views/blog/Switzerland";
import Paris from "views/blog/Paris";
import ReactGA from "react-ga";
import FirstCard from "views/FirstCard";
import Top10Cards from "views/Top10Cards";
import BattleoftheBest from "views/BattleoftheBest";
import TravelSmarter from "views/blog/TravelSmarter";
// others

ReactGA.initialize('UA-82402078-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
  
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
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
      <Route
        path="/travelblog"
        render={(props) => <TravelBlog {...props} />}
      />
      <Route
        path="/traveltips"
        render={(props) => <TravelTips {...props} />}
      />
      <Route
        path="/hiking"
        render={(props) => <Hiking {...props} />}
      />
      <Route
        path="/iceland"
        render={(props) => <Iceland {...props} />}
      />
      <Route
        path="/switzerland"
        render={(props) => <Switzerland {...props} />}
      />
      <Route
        path="/paris"
        render={(props) => <Paris {...props} />}
      />
      <Route
        path="/firstcard"
        render={(props) => <FirstCard {...props} />}
      />
      <Route
        path="/top10cards"
        render={(props) => <Top10Cards {...props} />}
      />
      <Route
        path="/battleofthebest"
        render={(props) => <BattleoftheBest {...props} />}
      />
      <Route
        path="/travelsmarter"
        render={(props) => <TravelSmarter {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
