import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import NewsContainer from '../containers/NewsContainer';
import NewestContainer from '../containers/NewestContainer';
import AskContainer from '../containers/AskContainer';
import ItemContainer from '../containers/ItemContainer';
import ShowContainer from '../containers/ShowContainer';
import JobsContainer from '../containers/JobsContainer';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <div className="ma4">
        <Navbar />
        <Route exact path="/" component={NewsContainer} />
        <Switch>
          <Route exact path="/newest" component={NewestContainer} />
          <Route exact path="/ask" component={AskContainer} />
          <Route exact path="/ask/:ask_id" component={ItemContainer} />
          <Route exact path="/show" component={ShowContainer} />
          <Route exact path="/jobs" component={JobsContainer} />
        </Switch>
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
