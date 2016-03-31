import React, { PropTypes, View } from 'react-native';
import { CollectionDataContainer } from '../containers';
import { Page, ActionBar, IconButton, DragableList } from '../widgets';
import NotificationListItem from './NotificationListItem';

let NotificationPage = ({token, params, onRefresh, onLoadMore, onBack}) => (
	<Page>
		<ActionBar title='Notifications' leftNode={<IconButton src='chevron-left' onPress={onBack}/>}/>
		<CollectionDataContainer stateKey='notifications' processPos='top' initFuncName='onRefresh'>
			<DragableList
				renderRow={notification => <NotificationListItem {...notification}/>}/>
		</CollectionDataContainer>
	</Page>
);

export default NotificationPage;