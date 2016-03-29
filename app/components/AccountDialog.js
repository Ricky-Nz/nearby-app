import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { Dialog, Layout, Avatar, MainText, SubText, StarMarkingBar, Link } from '../widgets';

class AccountDialog extends Component {
	componentDidMount() {
		this.props.loadAccount();
	}
	render() {
		const {loading, avatarUrl, name, marking, deliveredTimes, orderedTimes, ratingCount} = this.props;

		return (
			<Dialog loading={loading} closeBtn>
				<Layout alignCenter>
					<Avatar src={avatarUrl} size='large'/>
					<MainText>{name}</MainText>
					<StarMarkingBar mark={marking} size='small'/>
					<Layout padding>
						<SubText>{`Delivered ${deliveredTimes} orders, ordered ${orderedTimes} times`}</SubText>
					</Layout>
					<Link>{`${ratingCount} Ratings`}</Link>
				</Layout>
			</Dialog>
		);
	}
}

AccountDialog.propTypes = {
	loadAccount: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	marking: PropTypes.number.isRequired,
	deliveredTimes: PropTypes.number.isRequired,
	orderedTimes: PropTypes.number.isRequired,
	ratingCount: PropTypes.number.isRequired,
	onRatingClicked: PropTypes.func.isRequired
};

export default AccountDialog;