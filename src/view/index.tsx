import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'src/core/store/redux';
import Provider1 from 'src/store/provider';

import App from './App';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Provider1>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider1>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
