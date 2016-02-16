import React, { Component, StyleSheet, View } from 'react-native';
import StatusContainer from '../containers/StatusContainer';

class NearbyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default NearbyApp;