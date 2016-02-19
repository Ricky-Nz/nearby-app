import React, { Component, PropTypes, StyleSheet, View, Image, Text } from 'react-native';

let OrderListItem = (props) => (
	<View style={styles.container}>
		<View style={styles.textContainer}>
			<View style={styles.textLineContainer}>
				<Image style={styles.icon}/>
				<View>
					<Text style={styles.labelText}>Deliverer</Text>
					<Text style={styles.mainText}>{props.deliverer}</Text>
				</View>
			</View>
			<View style={styles.textLineContainer}>
				<Image style={styles.icon}/>
				<View>
					<Text style={styles.labelText}>Shop</Text>
					<View>
						<Text style={styles.mainText}>{props.shop}</Text>
						<Text>{props.distance}</Text>
					</View>
				</View>
			</View>
		</View>
		<Image style={styles.icon}/>
	</View>
);

OrderListItem.propTypes = {
	deliverer: PropTypes.string.isRequired,
	shop: PropTypes.string.isRequired,
	distance: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		marginTop: 10,
		padding: 10
	},
	textContainer: {
		flexDirection: 'column',
		flex: 1
	},
	textLineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 6
	},
	icon: {
		width: 30,
		height: 30
	},
	labelText: {
		fontSize: 12,
		color: 'darkgrey'
	},
	mainText: {
		fontSize: 16,
		color: 'black'
	}
});

export default OrderListItem;