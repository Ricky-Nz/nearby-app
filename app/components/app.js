import React, { Component, StyleSheet, View, StatusBar, Navigator, BackAndroid } from 'react-native';
import ShopPage from './ShopPage';
import HomePageContainer from '../containers/HomePageContainer';

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
        <StatusBar translucent={true} backgroundColor='transparent'/>
        <View style={styles.statusBar}/>
        <Navigator ref='navigator' style={styles.container} initialRoute={{name: 'home_page'}}
          renderScene={this.renderScene.bind(this)}/>
      </View>
		);
	}
  renderScene(route, navigator) {
    switch(route.name) {
      case 'home_page':
        return <HomePageContainer navigator={navigator}/>;
      case 'shop_page':
        return <ShopPage shop={route.data} onBackPressed={() => navigator.pop()}/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: 20,
    backgroundColor: 'darkturquoise'
  }
});

export default App;

