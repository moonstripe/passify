import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StickyFooter from './pages/common/components/Footer';
import Navbar from './pages/common/components/Navbar';

import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';



function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route exact path="/">
        <h1>Welcome to the about</h1>
      </Route>
      <StickyFooter />
    </Router>
  );
}

export default App;
