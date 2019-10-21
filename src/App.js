import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import

import { Switch, Route } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/contacts' component={Contact} />
          <Route path='/details' component={Details} />
          <Route path='/page-not-found' component={NotFoundPage} />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
