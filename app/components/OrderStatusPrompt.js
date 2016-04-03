import React, { PropTypes } from 'react-native';
import { Text } from '../widgets';

let OrderStatusPrompt = ({status, short, style}) => {
	let description;
	switch(status) {
		case 'accepted':
			description = short? 'Delivering' : 'Is delivering your order!';
			break;
		case 'pennding':
			description = 'Pennding';
			break;
	}

	return <Text style={style} wMode='sub' wSize='sm'>{description}</Text>;
};

OrderStatusPrompt.propTypes = {
	status: PropTypes.string.isRequired,
	short: PropTypes.bool
};

export default OrderStatusPrompt;