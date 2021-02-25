import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './redux/store';

import Devices from './tabs/Devices';
import Reservations from './tabs/Reservation';

const App = () => {

  return (
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route exact path="/" component={Devices} />
                  <Route exact path="/reservations" component={Reservations} />
              </Switch>
          </Router>
      </Provider>
  );
};

export default App;
