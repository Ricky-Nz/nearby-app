import React, { StyleSheet, View } from 'react-native';
import { Page, ActionBar, IconSelectBar, IconButton } from '../widgets';
import OrdersFragment from './OrdersFragment';
import ShopsFragment from './ShopsFragment';
import SettingFragment from './SettingFragment';

let HomePage = ({select, navigate}) => {
	let fragment;
	switch(select) {
		case 0: fragment = <OrdersFragment/>; break;
		case 1: fragment = <ShopsFragment/>; break;
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

const styles = StyleSheet.create({

});

export default HomePage;