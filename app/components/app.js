import React, { Component, Navigator } from 'react-native';
import TitleBar from './TitleBar';
import IconTabs from './IconTabs';
import OrderListPage from './OrderListPage';
import ShopListPage from './ShopListPage';
import AccountPage from './AccountPage';
import MerchantPage from './MerchantPage';

// navigationBar={<IconTabs tabs={['order', 'merchant', 'account']} onSelect={this.onTabSelected.bind(this)}/>}

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <ShopListPage navigator={navigator}/>
    );
  }
}

export default App;
