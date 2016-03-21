import React, { StyleSheet, PropTypes } from 'react-native';
import { Page, ActionBar, IconSelectBar, IconButton } from '../widgets';
import { ShopsFragmentContainer, OrdersFragmentContainer } from '../containers';
import SettingFragment from './SettingFragment';

let HomePage = ({select, navigate, navigator}) => {
	let fragment;
	switch(select) {
		case 0: fragment = <OrdersFragmentContainer/>; break;
		case 1: fragment = <ShopsFragmentContainer
			onItemClicked={(page) => navigator.push({name: 'shop', data: page})}/>; break;
		case 2: fragment = <SettingFragment/>; break;
	}

	return (
		<Page>
			<ActionBar leftNode={
				<IconSelectBar icons={['assignment', 'shopping-basket', 'account-circle']}
					select={select} onSelect={(index) => navigate(index)}/>
			} rightNode={<IconButton src='power-settings-new'/>}/>
			{fragment}
		</Page>
	);
};

HomePage.propTypes = {
	navigator: PropTypes.object.isRequired,
	navigate: PropTypes.func.isRequired,
	select: PropTypes.number.isRequired
}

export default HomePage;