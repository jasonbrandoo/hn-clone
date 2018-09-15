import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NewsContainer from '../containers/NewsContainer';
import NewestContainer from '../containers/NewestContainer';
import './App.css';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={NewsContainer} />
        <Switch>
          <Route path="/newest" component={NewestContainer} />
        </Switch>
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
