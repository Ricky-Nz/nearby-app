import React, { Component, StyleSheet, Navigator, BackAndroid } from 'react-native';
import HomePage from './HomePage';
import RatingPage from './RatingPage';
import NotificationPage from './NotificationPage';
import ShopDetailPage from './ShopDetailPage';
import MakeOrderPage from './MakeOrderPage';
import WidgetsDemo from '../widgets/WidgetsDemo';
import TESTPAGE from './TESTPAGE';

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
      <Navigator style={styles.container} ref='navigator' initialRoute={{name: 'homeaa'}}
        renderScene={this.renderScene.bind(this)}/>
		);
	}
  renderScene(route, navigator) {
    switch(route.name) {
      case 'home':
        return <HomePage
          openShopPage={(shop) => navigator.push({name: 'shop', data: shop})}
          openRatingPage={() => navigator.push({name: 'rating'})}
          openNotificationPage={() => navigator.push({name: 'notification'})}/>;
      case 'shop':
        return <ShopDetailPage {...route.data} onBack={this.onBackPassed.bind(this)}/>;
      case 'rating':
        return <RatingPage onBack={this.onBackPassed.bind(this)}/>;
      case 'notification':
        return <NotificationPage onBack={this.onBackPassed.bind(this)}/>;
      default:
        return <TESTPAGE/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AppNavigator;

