import React, { PropTypes, View } from 'react-native';
import Layout from './Layout';
import IconButton from './IconButton';
import MainText from './MainText';
import SubText from './SubText';
import { THEME_COLOR } from './theme';

let NumberOperatePanel = ({value, description, onValueUpdate}) => (
	<Layout row spaceBetween>
		<IconButton color={THEME_COLOR} src='remove'
			onPress={() => onValueUpdate(value - 1)}/>
		<Layout alignCenter>
			<MainText>{value}</MainText>
			<SubText>{description}</SubText>
		</Layout>
		<IconButton color={THEME_COLOR} src='add'
			onPress={() => onValueUpdate(value + 1)}/>
	</Layout>
);

NumberOperatePanel.propTypes = {
	value: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	onValueUpdate: PropTypes.func.isRequired
};

export default NumberOperatePanel;