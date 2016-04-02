import React, { TouchableHighlight, View } from 'react-native';

const Clickable = ({children, style, onPress}) => (
	<TouchableHighlight style={style} onPress={onPress} activeOpacity={0.9} underlayColor='aliceblue'>
		<View style={style}>
			{children}
		</View>
	</TouchableHighlight>
);

export default Clickable;