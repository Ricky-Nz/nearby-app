import React, { Component, StyleSheet, View, NavigationExperimental, BackAndroid } from 'react-native';
import ShopListPage from './ShopListPage';
import ShopPage from './ShopPage';

const {
  RootContainer: NavigationRootContainer,
  Reducer: NavigationReducer,
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

function reduceNavigationState(initialState) {
  return (currentState, action) => {
    switch(action.type) {
      case 'RootContainerInitialAction':
        return initialState;
      case 'push':
        return NavigationStateUtils.push(currentState,
          {key: action.key, data: action.data});
      case 'back':
      case 'pop':
        return currentState.index > 0 ?
          NavigationStateUtils.pop(currentState) : currentState;
      default:
        return currentState;
    }
  };
}

const RootReducer = reduceNavigationState({
  index: 0,
  key: 'root',
  children: [{key: 'main_page'}]
});

class App extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPassed.bind(this));
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackPassed);
  }
  onBackPassed() {
    return this.navRootContainer.handleNavigation({type: 'pop'});
  }
	render() {
		return (
      <NavigationRootContainer
        ref={navRootContainer => this.navRootContainer = navRootContainer}
        reducer={RootReducer}
        renderNavigation={this.renderNavigation.bind(this)}
        style={styles.container}/>
		);
	}
	renderNavigation(navigationState, onNavigate) {
    return (
      <NavigationCardStack direction='vertical' navigationState={navigationState}
        onNavigate={onNavigate} renderScene={this.renderScene.bind(this)} style={styles.container}/>
    );
	}
  renderScene({navigationState, onNavigate}) {
    const currentPage = navigationState.children[navigationState.index];
    
    switch(currentPage.key) {
      case 'main_page':
        return <ShopListPage onNavigate={onNavigate}/>;
      case 'shop_page':
        return <ShopPage shop={currentPage.data} onNavigate={onNavigate}/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

