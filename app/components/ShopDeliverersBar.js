import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { AvatarSelectBar } from '../widgets';

class ShopDeliverersBar extends Component {
	componentDidMount() {
		this.props.onLoad(this.props.shopId);
	}
	render() {
		const { ...props } = this.props;
		
		return (
			<AvatarSelectBar style={styles.container} {...props}/>
		);
	}
}

ShopDeliverersBar.propTypes = {
	shopId: PropTypes.string.isRequired,
	loading: PropTypes.bool,
	onLoad: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		height: 100
	}
});

export default ShopDeliverersBar;