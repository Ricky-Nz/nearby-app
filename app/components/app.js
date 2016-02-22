import React, { Component, View, Text, StyleSheet, StatusBar, Navigator } from 'react-native';
import TitleBar from './TitleBar';
import IconTabs from './IconTabs';
import OrderPage from './OrderPage';
import MerchantPage from './MerchantPage';
import AccountPage from './AccountPage';

class NearbyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' translucent/>
        <TitleBar title={this.props.appState.selectTab}/>
        <Navigator ref='navigator'
          initialRoute={this.props.appState.selectTab}
          initialRouteStack={[{type: 'order'}, {type: 'merchant'}, {type: 'account'}]}
          configureScene={() => Navigator.SceneConfigs.FloatFromRight}
          renderScene={this.appRouter}
          navigationBar={<IconTabs tabs={['order', 'merchant', 'account']} onSelect={this.onTabSelected.bind(this)}/>}/>
      </View>
    );
  }
  appRouter(route, navigator) {
    switch(route.type) {
      case 'order': return <OrderPage navigator={navigator}/>;
      case 'merchant': return <MerchantPage navigator={navigator}/>;
      case 'account': return <AccountPage/>;
    }
  }
  onTabSelected(index) {
    const route = this.refs.navigator.getCurrentRoutes()[index];
    this.props.selectTab(route.type);
    this.refs.navigator.jumpTo(route);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NearbyApp;
