import React, { Component, View, Text, StyleSheet, StatusBar, Navigator } from 'react-native';
import TitleBar from './TitleBar';
import IconTabs from './IconTabs';
import OrderPage from './OrderPage';
import MerchantPage from './MerchantPage';
import AccountPage from './AccountPage';
import MerchantDetailPageContainer from '../containers/MerchantDetailPageContainer';
import PageBackButton from './PageBackButton';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PageBackButton/>
        <StatusBar backgroundColor='transparent' translucent/>
        <TitleBar title={this.props.mainStack[this.props.stackIndex].type}/>
        <Navigator ref={navigator => this._navigator = navigator}
          initialRoute={this.props.mainStack[0]}
          initialRouteStack={this.props.mainStack}
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
      case 'merchantDetail': return <MerchantDetailPageContainer/>
    }
  }
  onTabSelected(index) {
    const route = this._navigator.getCurrentRoutes()[index];
    this.props.selectTab(index);
    this._navigator.jumpTo(route);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
