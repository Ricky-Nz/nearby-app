import React, { Component, StyleSheet, View, Navigator, BackAndroid } from 'react-native';
import WidgetsDemo from '../widgets/WidgetsDemo';

class AppNavigator extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPassed.bind(this));
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackPassed);
  }
  onBackPassed() {
    this.refs.navigator.pop();
    return true;
  }
	render() {
		return (
      <View style={styles.container}>
        <Navigator ref='navigator' style={styles.container} initialRoute={{name: 'test'}}
          renderScene={this.renderScene.bind(this)}/>
      </View>
		);
	}
  renderScene(route, navigator) {
    switch(route.name) {
      default:
        return <WidgetsDemo/>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AppNavigator;

