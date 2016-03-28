import React, { StyleSheet, View } from 'react-native';

let Layout = ({children, ...props}) => (
	<View style={props&&Object.keys(props).map(key => styles[key])}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	end: {
		justifyContent: 'flex-end'
	},
	start: {
		justifyContent: 'flex-start'
	},
	center: {
		justifyContent: 'center'
	},
	spaceBetween: {
		justifyContent: 'space-between'
	},
	spaceAround: {
		justifyContent: 'space-around'
	},
	alignStart: {
		alignItems: 'flex-end'
	},
	alignEnd: {
		alignItems: 'flex-start'
	},
	alignCenter: {
		alignItems: 'center'
	},
	padding: {
		padding: 20
	},
	paddingTop: {
		paddingTop: 20
	},
	paddingBottom: {
		paddingBottom: 20
	},
	paddingLeft: {
		paddingLeft: 20
	},
	paddingRight: {
		paddingRight: 20
	},
	paddingVertical: {
		paddingVertical: 20
	},
	paddingHorizontal: {
		paddingHorizontal: 20
	}
})

export default Layout;