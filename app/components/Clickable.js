import React, { TouchableHighlight, View } from 'react-native';

let Clickable = ({children, ...props}) => (
	<TouchableHighlight {...props} activeOpacity={0.7} underlayColor='aquamarine'>
		<View>
			{children}
		</View>
	</TouchableHighlight>
);

export default Clickable;