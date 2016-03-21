import React, { PropTypes, View, Text } from 'react-native';
import { SlideTabViewPager, Fragment } from '../widgets';
import OrderListItem from './OrderListItem';
import { ORDERS, DELIVERS } from '../actions';

let OrdersFragment = ({loading, ...props}) => (
	<Fragment loading={loading}>
		<SlideTabViewPager mode='text' tabs={['ORDERED', 'DELIVERED']}
			onBindPager={(index) => {
				if (index === 0) {
					return (
						<ListDataContainer listName={ORDERS} {...props}
							renderRow={order => <OrderListItem {...order} onPress={() => onItemClicked(shop)}/>}/>
					);
				} else {
					return (
						<ListDataContainer listName={DELIVERS} {...props}
							renderRow={order => <OrderListItem {...order} onPress={() => onItemClicked(shop)}/>}/>
					);
				}
			}}/>
	</Fragment>
);

export default OrdersFragment;