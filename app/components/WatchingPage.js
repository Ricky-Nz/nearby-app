import React, { PropTypes, View } from 'react-native';
import { DragableListContainer } from '../containers';
import { Page, ActionBar, IconButton } from '../widgets';
import WatchingListItem from './WatchingListItem';

let WatchingPage = ({title, token, params, onRefresh, onLoadMore, onBack}) => (
	<Page>
		<ActionBar title='Watch List' leftNode={<IconButton src='chevron-left' onPress={onBack}/>}/>
		<DragableListContainer stateKey='watchings'
			renderRow={watching => {
				console.log(watching);
				return <WatchingListItem {...watching}/>;
			}}
			onRefresh={() => onRefresh(token, params)}
			onLoadMore={() => onLoadMore(token, params)}/>
	</Page>
);

export default WatchingPage;