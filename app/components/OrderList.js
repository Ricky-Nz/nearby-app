import React, { PropTypes } from 'react-native';
import { CollectionDataContainer } from '../containers';
import { DragableList, VerticalGap } from '../widgets';
import OrderListItem from './OrderListItem';

let OrderList = ({onSelectOrder, onItemClicked, onRateOrder, stateKey}) => (
	<CollectionDataContainer processPos='top' stateKey={stateKey}>
		<DragableList renderSeparator={() => <VerticalGap/>}
			renderRow={order =>
				<OrderListItem {...order} onRateOrder={() => {
						onSelectOrder(order);
						onRateOrder();
					}}
					onPress={() => {
						onSelectOrder(order);
						onItemClicked();
					}}/>}/>
	</CollectionDataContainer>
);

OrderList.propTypes = {
	stateKey: PropTypes.string.isRequired,
	onSelectOrder: PropTypes.func.isRequired,
	onItemClicked: PropTypes.func.isRequired,
	onRateOrder: PropTypes.func.isRequired
};

export default OrderList;