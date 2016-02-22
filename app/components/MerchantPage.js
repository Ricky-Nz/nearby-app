import React, { Component, StyleSheet } from 'react-native';
import MerchantListContainer from '../containers/MerchantListContainer';

class MerchantPage extends Component {
	render() {
		return (
			<MerchantListContainer
				onItemClicked={(data) => this.props.navigator.push({type: 'merchantDetail', data})} style={styles.container}/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});

export default MerchantPage;