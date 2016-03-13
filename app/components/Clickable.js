import React, { TouchableHighlight } from 'react-native';

let Clickable = ({children, ...props}) => (
	<TouchableHighlight {...props} activeOpacity={0.7} underlayColor='aquamarine'>
		{children}
	</TouchableHighlight>
);

export default Clickable;