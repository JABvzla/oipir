import React from 'react';
import {Provider} from 'react-redux';
import store from '@redux/store';
import AppRoutes from './routes';

const newStore = store({});

const AppRedux = () => (
  <Provider store={newStore}>
    <AppRoutes />
  </Provider>
);

export default AppRedux;
