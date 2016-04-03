import React, { PropTypes } from 'react-native';
import { Layout, Avatar, Text, StarMarkingBar } from '../widgets';

let AccountPanel = ({avatarUrl, name, rating}) => (
	<Layout alignCenter>
		<Avatar src={avatarUrl} size='large'/>
		<Text wSize='lg' wMode='primary'>{name}</Text>
		<StarMarkingBar mark={rating} wSize='sm'/>
	</Layout>
);

AccountPanel.propTypes = {
	avatarUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	marking: PropTypes.number.isRequired
};

export default AccountPanel;