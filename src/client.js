import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { Provider, connect } from 'react-redux';
import { store } from 'app/reducer';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import 'bootstrap/dist/css/bootstrap.css';

import { App } from 'app';
import { List as PowerRangerListContainer } from 'powerRanger/containers/list';
import { Detail as PowerRangerDetailContainer } from 'powerRanger/containers/detail';
import { Edit as PowerRangerEditContainer } from 'powerRanger/containers/edit';

const routes = (
  <div>
    <Provider store={store}>
      <ReduxRouter>
        <Route path='/' component={App}>
          <Route path='powerRangers' component={PowerRangerListContainer}></Route>
          <Route path='powerRangers/:id' component={PowerRangerDetailContainer}></Route>
          <Route path='powerRangers/:id/edit' component={PowerRangerEditContainer}></Route>
        </Route>
      </ReduxRouter>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
);

render(routes, document.getElementById('root'));
