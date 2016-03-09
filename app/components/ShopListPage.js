import React, { StyleSheet, PropTypes, View } from 'react-native';
import ShopListContainer from '../containers/ShopListContainer';

const ShopListPage = ({onNavigate}) => (
	<View style={styles.container}>
		<ShopListContainer
			onItemClicked={(data) => onNavigate({key: 'shop_detail', data})}/>
	</View>
);

ShopListPage.propTypes = {
	onNavigate: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});

export default ShopListPage;