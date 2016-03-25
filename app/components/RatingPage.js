import React, { PropTypes, View } from 'react-native';
import { DragableListContainer } from '../containers';
import { Page, ActionBar, IconButton } from '../widgets';
import RatingListItem from './RatingListItem';

let RatingPage = ({title, token, params, onRefresh, onLoadMore, onBack}) => (
	<Page>
		<ActionBar title={title} leftNode={<IconButton src='chevron-left' onPress={onBack}/>}/>
		<DragableListContainer stateKey='ratings'
			renderRow={rating => <RatingListItem {...rating}/>}
			onRefresh={() => onRefresh(token, params)}
			onLoadMore={() => onLoadMore(token, params)}/>
	</Page>
);

RatingPage.propTypes = {
	title: PropTypes.string.isRequired
};

export default RatingPage;