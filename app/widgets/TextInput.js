import React, { TextInput } from 'react-native';
import { THEME_COLOR } from './theme';

let TextInputWrapper = (props) => (
	<TextInput underlineColorAndroid='transparent' selectionColor={THEME_COLOR} {...props}/>
);

export default TextInputWrapper;