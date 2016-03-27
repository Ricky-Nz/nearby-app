import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { Dialog, Layout, Avatar, MainText, SubText, StarMarkingBar, Link } from '../widgets';

class AccountDialog extends Component {
	componentDidMount() {
		this.props.loadAccount(this.props.token, this.props.accountId);
	}
	render() {
		const {loading, avatarUrl, name, marking, deliveredTimes, orderedTimes, ratingCount} = this.props;

		return (
			<Dialog>
				<ProgressWrapper style={styles.progressContainer} loading={loading}>
					<Layout alignCenter>
						<Avatar src={avatarUrl} size='normal'/>
						<MainText>{name}</MainText>
						<StarMarkingBar mark={marking}/>
						<Layout padding>
							<SubText>{`Delivered ${deliveredTimes} orders, ordered ${orderedTimes}` times}</SubText>
						</Layout>
						<Link>{`${ratingCount} Ratings`}</Link>
					</Layout>
				</ProgressWrapper>
			</Dialog>
		);
	}
}

AccountDialog.propTypes = {
	token: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	accountId: PropTypes.string.isRequired,
	loadAccount: PropTypes.func.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	marking: PropTypes.number.isRequired,
	deliveredTimes: PropTypes.number.isRequired,
	orderedTimes: PropTypes.number.isRequired,
	ratingCount: PropTypes.numner.isRequired,
	onRatingClicked: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	progressContainer: {
		height: 300
	}
});

export default AccountDialog;