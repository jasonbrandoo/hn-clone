import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NewsContainer from '../containers/NewsContainer';
import NewestContainer from '../containers/NewestContainer';
import AskContainer from '../containers/AskContainer';
import ItemContainer from '../containers/ItemContainer';
import './App.css';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={NewsContainer} />
        <Switch>
          <Route exact path="/newest" component={NewestContainer} />
          <Route exact path="/ask" component={AskContainer} />
          <Route exact path="/:ask_id" component={ItemContainer} />
        </Switch>
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
