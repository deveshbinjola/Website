import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"
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
import ConnectedRouter from "react-router-redux"

export default function Routes() {
    const history = createHistory({
      basename: process.env.PUBLIC_URL,
    });
  
    const store = configureStore({ history });
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/creditadvice" component={CreditAdvice} />
          <Route path="/digitalnomad" component={DigitalNomad} />
          <Route path="/travelblog" component={TravelBlog} />
          <Route path="/traveltips" component={TravelTips} />
          <Route path="/hiking" component={Hiking} />
          <Route path="/iceland" component={Iceland} />
          <Route path="/switzerland" component={Switzerland} />
          <Route path="/paris" component={Paris} />
          <Route path="/firstcard" component={FirstCard} />
          <Route path="/top10cards" component={Top10Cards} />
          <Route path="/battleofthebest" component={BattleoftheBest} />
          <Route path="/travelsmarter" component={TravelSmarter} />

          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }

