import React, { Component, StyleSheet, View, Navigator, BackAndroid } from 'react-native';
import { RatingPageContainer, NotificationPageContainer,
  WatchingPageContainer, AccountDialogContainer } from '../containers';
import { DialogPage } from '../widgets';
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
      <Navigator style={styles.container} ref='navigator' initialRoute={{name: 'home11'}}
        renderScene={this.renderScene.bind(this)}/>
		);
	}
  renderScene(route, navigator) {
    switch(route.name) {
      case 'home':
        return <HomePage navigator={navigator}/>;
      case 'shop':
        return <ShopPage {...route.data} onBack={this.onBackPassed.bind(this)}/>;
      case 'rating':
        return <RatingPageContainer title='My Ratings' onBack={this.onBackPassed.bind(this)}/>;
      case 'notification':
        return <MakeOrderPage onBack={this.onBackPassed.bind(this)}/>;
      default:
        return (
          <DialogPage>
            <AccountDialogContainer/>
          </DialogPage>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AppNavigator;

