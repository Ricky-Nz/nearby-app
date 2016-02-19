import React, { Component, View, Text, StyleSheet, StatusBar, Navigator } from 'react-native';
import OrderPage from './OrderPage';

class NearbyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' translucent/>
        <Navigator
          initialRoute={{name: 'search'}}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={this.appRouter}>
        </Navigator>
      </View>
    );
  }
  appRouter(route, navigator) {
    return (<OrderPage/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NearbyApp;