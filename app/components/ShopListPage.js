import React, { StyleSheet, PropTypes, View, StatusBar } from 'react-native';
import ShopListContainer from '../containers/ShopListContainer';

const ShopListPage = ({onShopClicked}) => (
	<View style={styles.container}>
		<StatusBar translucent={true} backgroundColor='transparent'/>
		<ShopListContainer onItemClicked={onShopClicked}/>
	</View>
);

ShopListPage.propTypes = {
	onShopClicked: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});

export default ShopListPage;