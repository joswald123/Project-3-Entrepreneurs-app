//Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

//Compponents
import { AuthProvider } from "./Auth"
import App from './components/App';
import Home from './components/pages/Home';
import NoMatch from './components/pages/Page404';
import BackerPage from './components/pages/BackerPage';
import ProjectPage from './components/pages/MyProjectPage';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import FavoritesPage from './components/pages/FavoritePage';
import MailBox from './components/pages/MailBox';
import PrivateRoute from "./PrivateRoute";


const AppRoutes = () =>
  <AuthProvider>
  <App>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/backerpage" component={BackerPage} />
      <PrivateRoute exact path="/projectpage" component={ProjectPage} />
      <PrivateRoute exact path="/favoritespage" component={FavoritesPage} />
      <PrivateRoute exact path="/mailbox" component={MailBox} />
      <Route exact path="/contact" component={Contact} />
      <Route exact component={NoMatch} />

    </Switch>
  </App>
  </AuthProvider>;

export default AppRoutes;
