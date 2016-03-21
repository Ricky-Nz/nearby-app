import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { SubText } from '../widgets';

let ShopQuickInfoBar = ({distance, category, price_tier}) => (
	<View style={styles.container}>
		<SubText>{distance}</SubText>
		<Text style={styles.middlePoint}>·</Text>
		<SubText>{category}</SubText>
		<Text style={styles.middlePoint}>·</Text>
		<SubText>{price_tier}</SubText>
	</View>
);

ShopQuickInfoBar.propTypes = {
	distance: PropTypes.string,
	category: PropTypes.string,
	price_tier: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	middlePoint: {
		color: 'lightseagreen',
		marginHorizontal: 5,
		fontSize: 22
	}
});

export default ShopQuickInfoBar;