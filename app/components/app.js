import React, { Component, StyleSheet, View, StatusBar, Navigator, BackAndroid } from 'react-native';
// import ShopPage from './ShopPage';
// import HomePageContainer from '../containers/HomePageContainer';
import WidgetsDemo from '../widgets/WidgetsDemo';

class App extends Component {
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
      // case 'home_page':
      //   return <HomePageContainer navigator={navigator}/>;
      // case 'shop_page':
      //   return <ShopPage shop={route.data} onBackPressed={() => navigator.pop()}/>;
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

export default App;

