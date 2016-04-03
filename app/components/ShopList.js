import React, { PropTypes } from 'react-native';
import { CollectionDataContainer } from '../containers';
import { DragableList, VerticalGap } from '../widgets';
import ShopListItem from './ShopListItem';

let ShopList = ({onSelectShop, onItemClicked}) => (
	<CollectionDataContainer processPos='top' stateKey='shops'>
		<DragableList renderSeparator={() => <VerticalGap/>}
			renderRow={shop => <ShopListItem {...shop} onPress={() => {
				onSelectShop(shop.id);
				onItemClicked();
			}}/>}/>
	</CollectionDataContainer>
);

ShopList.propTypes = {
	onSelectShop: PropTypes.func.isRequired,
	onItemClicked: PropTypes.func.isRequired
};

export default ShopList;