import React, { StyleSheet, View } from 'react-native';

let Layout = ({children, ...props}) => (
	<View style={props&&Object.keys(props).map(key => key === 'style'? props[key] : styles[key])}>
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
		padding: 18
	},
	paddingTop: {
		paddingTop: 18
	},
	paddingBottom: {
		paddingBottom: 18
	},
	paddingLeft: {
		paddingLeft: 18
	},
	paddingRight: {
		paddingRight: 18
	},
	paddingVertical: {
		paddingVertical: 18
	},
	paddingHorizontal: {
		paddingHorizontal: 18
	}
})

export default Layout;