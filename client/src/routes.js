//Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

//Compponents
import App from './components/App';
import Home from './components/pages/Home';
import NoMatch from './components/pages/Page404';
import BackerPage from './components/pages/BackerPage';
import ProjectPage from './components/pages/MyProjectPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import SignUp from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import FavoritesPage from './components/pages/FavoritePage';
import MailBox from './components/pages/MailBox';
import Help from './components/pages/Help';





const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/login" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/backerpage" component={BackerPage} />
      <Route exact path="/projectpage" component={ProjectPage} />
      <Route exact path="/favoritespage" component={FavoritesPage} />
      <Route exact path="/mailbox" component={MailBox} />
      <Route exact path="/contact" component={Contact} />
      <Route exact component={NoMatch} />

    </Switch>
  </App>;

export default AppRoutes;
