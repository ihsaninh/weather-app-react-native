import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './app/Navigation/AppNavigator';
import { store } from './app/Redux/CreateStore';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </Fragment>
  );
};

export default App;
