import React, { Component, StyleSheet, View, Navigator, BackAndroid } from 'react-native';
import ShopListPage from './ShopListPage';
import ShopPage from './ShopPage';

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
      <Navigator ref='navigator' initialRoute={{name: 'home_page'}}
        renderScene={this.renderScene.bind(this)}
        style={styles.container}/>
		);
	}
  renderScene(route, navigator) {
    switch(route.name) {
      case 'home_page':
        return <ShopListPage onShopClicked={(data) => navigator.push({name: 'shop_page', data})}/>;
      case 'shop_page':
        return <ShopPage shop={route.data} onBackPressed={() => navigator.pop()}/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

