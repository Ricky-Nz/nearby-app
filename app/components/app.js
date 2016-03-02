import React, { Component, Navigator } from 'react-native';
import TitleBar from './TitleBar';
import IconTabs from './IconTabs';
import OrderListPage from './OrderListPage';
import MerchantListPage from './MerchantListPage';
import AccountPage from './AccountPage';
import MerchantPage from './MerchantPage';

// navigationBar={<IconTabs tabs={['order', 'merchant', 'account']} onSelect={this.onTabSelected.bind(this)}/>}

class App extends Component {
  render() {
    return (
      <Navigator ref={navigator => this._navigator = navigator}
        initialRoute={this.props.mainStack[0]}
        initialRouteStack={this.props.mainStack}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        renderScene={this.appRouter}/>
    );
  }
  appRouter(route, navigator) {
    switch(route.type) {
      case 'order': return <MerchantPage navigator={navigator}/>;
      case 'merchant': return <MerchantListPage navigator={navigator}/>;
      case 'account': return <AccountPage/>;
      case 'merchantDetail': return null;
    }
  }
  onTabSelected(index) {
    const route = this._navigator.getCurrentRoutes()[index];
    this.props.selectTab(index);
    this._navigator.jumpTo(route);
  }
}

export default App;
