import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { AvatarSelectBar, ProgressWrapper } from '../widgets';

class ShopDeliverersBar extends Component {
	componentDidMount() {
		this.props.onLoad(this.props.shopId);
	}
	render() {
		const { loading, ...props } = this.props;
		
		return (
			<ProgressWrapper style={styles.container} loading={loading}>
				<AvatarSelectBar style={styles.container} {...props}/>
			</ProgressWrapper>
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