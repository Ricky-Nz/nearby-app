import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import App from './components/app';
import createStore from './store';

const store = createStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

export default Root;