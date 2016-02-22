import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import createStore from './store';

const store = createStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default Root;