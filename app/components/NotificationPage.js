import React, { PropTypes, View } from 'react-native';
import { DragableListContainer } from '../containers';
import { Page, ActionBar, IconButton } from '../widgets';
import NotificationListItem from './NotificationListItem';

let NotificationPage = ({token, params, onRefresh, onLoadMore, onBack}) => (
	<Page>
		<ActionBar title='Notifications' leftNode={<IconButton src='chevron-left' onPress={onBack}/>}/>
		<DragableListContainer stateKey='notifications'
			renderRow={notification => <NotificationListItem {...notification}/>}
			onRefresh={() => onRefresh(token, params)}
			onLoadMore={() => onLoadMore(token, params)}/>
	</Page>
);

export default NotificationPage;