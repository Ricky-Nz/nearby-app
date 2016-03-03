import React, { Component, StyleSheet, View } from 'react-native';
import ShopListContainer from '../containers/ShopListContainer';
import ToggleTextButton from './ToggleTextButton';

class ShopListPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ShopListContainer
					onItemClicked={(data) => this.props.navigator.push({type: 'merchantDetail', data})} style={styles.container}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});

export default ShopListPage;