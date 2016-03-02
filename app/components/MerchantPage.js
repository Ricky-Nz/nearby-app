import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import MerchantViewContainer from '../containers/MerchantViewContainer';

class MerchantPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MerchantViewContainer/>
			</View>
		);
	}
}

MerchantPage.propTypes = {

};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default MerchantPage;