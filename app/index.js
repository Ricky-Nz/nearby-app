import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './store';
import AppNavigator from './components/AppNavigator';

const store = createStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default Root;