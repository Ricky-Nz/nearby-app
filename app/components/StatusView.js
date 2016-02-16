import React, { Component, StyleSheet, View, Text } from 'react-native';

class StatusView extends Component {
	render() {
		return (
			<View>
				<Text style={styles.font}>{JSON.stringify(this.props.status)}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default StatusView;