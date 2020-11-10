// This controller will be in charge of which component from the User folder should be shown
// to the user right now
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    LoginListView,
    LoginSingleView,
    WrappedSaveLogin,
} from './LoginViews';

export const LoginContainer = (props) => {
  return (
    <Switch>
      <Route exact path='/logins' component={LoginListView}/>
      <Route exact path='/logins/create' component={WrappedSaveLogin}/>
      <Route path='/logins/:loginId' component={LoginSingleView} />
    </Switch>
  );
};
