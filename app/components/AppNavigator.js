import React, { Component, StyleSheet, View, Navigator, BackAndroid } from 'react-native';
import { HomePageContainer } from '../containers';
import ShopPage from './ShopPage';
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
      <Navigator style={styles.container} ref='navigator' initialRoute={{name: 'home'}}
        renderScene={this.renderScene.bind(this)}/>
		);
	}
  renderScene(route, navigator) {
    switch(route.name) {
      case 'home':
        return <HomePageContainer navigator={navigator}/>
      case 'shop':
        return <ShopPage {...route.data} onBack={() => navigator.pop()}/>;
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

