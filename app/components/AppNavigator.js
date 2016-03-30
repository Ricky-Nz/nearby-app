import React, { Component, StyleSheet, Navigator, BackAndroid } from 'react-native';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import MakeOrderPage from './MakeOrderPage';
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
        return <HomePage openShopPage={shop => navigator.push({name: 'shop', data: shop})}/>;
      case 'shop':
        return <ShopPage {...route.data} onBack={this.onBackPassed.bind(this)}/>;
      case 'rating':
        return null;
      case 'notification':
        return <MakeOrderPage onBack={this.onBackPassed.bind(this)}/>;
      default:
        return <WidgetsDemo/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AppNavigator;

