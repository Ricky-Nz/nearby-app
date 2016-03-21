import React, { PropTypes } from 'react-native';
import { ShopListContainer } from '../containers';
import { Fragment } from '../widgets';

let ShopsFragment = ({loading, ...props}) => (
	<Fragment loading={loading}>
		<ShopListContainer {...props}/>
	</Fragment>
);

export default ShopsFragment;