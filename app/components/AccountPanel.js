import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { Dialog, Layout, Avatar, MainText, SubText, StarMarkingBar, Link } from '../widgets';

let AccountPanel = ({avatarUrl, name, marking, deliveredTimes, orderedTimes, ratingCount}) => (
	<Layout alignCenter>
		<Avatar src={avatarUrl} size='large'/>
		<MainText>{name}</MainText>
		<StarMarkingBar mark={marking} size='small'/>
		<Layout padding>
			<SubText>{`Delivered ${deliveredTimes} orders, ordered ${orderedTimes} times`}</SubText>
		</Layout>
		<Link>{`${ratingCount} Ratings`}</Link>
	</Layout>
);

AccountDialog.propTypes = {
	avatarUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	marking: PropTypes.number.isRequired,
	deliveredTimes: PropTypes.number.isRequired,
	orderedTimes: PropTypes.number.isRequired,
	ratingCount: PropTypes.number.isRequired
};

export default AccountDialog;