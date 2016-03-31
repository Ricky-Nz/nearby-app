import React, { PropTypes, View } from 'react-native';
import { CollectionDataContainer } from '../containers';
import { Page, ActionBar, IconButton, DragableList } from '../widgets';
import RatingListItem from './RatingListItem';

let RatingPage = ({onBack}) => (
	<Page>
		<ActionBar title='My Ratings' leftNode={<IconButton src='chevron-left' onPress={onBack}/>}/>
		<CollectionDataContainer processPos='top' stateKey='ratings' initFucName='onRefresh'>
			<DragableList
				renderRow={rating => <RatingListItem {...rating}/>}/>
		</CollectionDataContainer>
	</Page>
);

RatingPage.propTypes = {
	onBack: PropTypes.func.isRequired
};

export default RatingPage;