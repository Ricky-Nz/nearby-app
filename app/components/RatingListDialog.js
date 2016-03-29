import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { Dialog, Layout, Avatar, TitleText, SubText, StarMarkingBar, HorizontalLine, THEME_COLOR } from '../widgets';
import RatingList from './RatingList';

class RatingListDialog extends Component {
	render() {
		const {loading, avatarUrl, rates, marking } = this.props;

		return (
			<Dialog style={styles.container} closeBtn
				title={
					<Layout alignCenter>
						<TitleText style={styles.titleText}>{`${rates} Ratings`}</TitleText>
						<StarMarkingBar mark={marking}/>
					</Layout>
				} rightTitleNode={<Avatar src={avatarUrl}/>}>
				<HorizontalLine padding/>
				<RatingList/>
			</Dialog>
		);
	}
}

RatingListDialog.propTypes = {
	avatarUrl: PropTypes.string.isRequired,
	rates: PropTypes.number.isRequired,
	marking: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	titleText: {
		color: THEME_COLOR
	}
});

export default RatingListDialog;