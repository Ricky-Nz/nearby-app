import React, { StyleSheet, View } from 'react-native';

const ListSeparator = (props) => (
	<View style={styles.container}/>
);

const styles = StyleSheet.create({
	container: {
		height: 1,
		marginHorizontal: 10,
		backgroundColor: 'gainsboro'
	}
});

export default ListSeparator;