import React, { PropTypes } from 'react-native';
import Text from './Text';
import moment from 'moment';

let TimeText = ({children, format, ...props}) => (
	<Text {...props}>{moment(children).format(format)}</Text>
);

TimeText.propTypes = {
	format: PropTypes.string
};

TimeText.defaultProps = {
	format: 'MMMM Do'
};

export default TimeText;