import React, { Component, NavigationExperimental } from 'react-native';
import ShopListPage from './ShopListPage';
import ShopPage from './ShopPage';

const {
  RootContainer: NavigationRootContainer,
  Reducer: NavigationReducer,
} = NavigationExperimental;
const StackReducer = NavigationReducer.StackReducer;

const NavigationBasicReducer = StackReducer({
  initialStates: [{key: 'first_page'}],
  matchAction: action => true,
  actionStateMap: action => action,
});

class App extends Component {
	render() {
		return (
      <NavigationRootContainer
        reducer={NavigationBasicReducer}
        persistenceKey="NavigationBasicExampleState"
        ref={navRootContainer => { this.navRootContainer = navRootContainer; }}
        renderNavigation={this.renderNavigation.bind(this)}/>
		);
	}
	renderNavigation(navState, onNavigate) {
    if (!navState) return null;

    const currentPage = navState.children[navState.index];
    switch(currentPage.key) {
    	case 'first_page':
    		return (<ShopListPage onNavigate={onNavigate}/>);
    	case 'shop_detail':
    		return (<ShopPage shop={currentPage.data} onNavigate={onNavigate}/>);
    	default:
    		return null;
    }
	}
}

export default App;
