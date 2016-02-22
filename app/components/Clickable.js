import React, { TouchableHighlight } from 'react-native';

let Clickable = (props) => (
	<TouchableHighlight underlayColor='aliceblue' style={props.style} onPress={props.onPress}>
		{props.children}
	</TouchableHighlight>
);

export default Clickable;