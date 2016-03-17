import React, { PropTypes, StyleSheet, View } from 'react-native';
import IconButton from './IconButton';
import TitleText from './TitleText';

let ActionBar = ({title, back, menus, onBackClicked, onMenuClicked, style}) => (
	<View style={[styles.container, style]}>
		{back&&
			<IconButton src={back} size='small'
				onPress={() => onBackClicked&&onBackClicked()}/>
		}
		<TitleText style={styles.title}>{title}</TitleText>
		{menus&&
			menus.map((menu, index) => <IconButton key={index} src={menu} size='small'
				onPress={() => onMenuClicked&&onMenuClicked(menu)}/>)
		}
	</View>
);

ActionBar.propTypes = {
	title: PropTypes.string,
	back: PropTypes.string,
	menus: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string)
	]),
	onBackClicked: PropTypes.func,
	onMenuClicked: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		height: 60,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'darkturquoise'
	},
	title: {
		color: 'white',
		marginHorizontal: 10,
		flex: 1
	}
});

export default ActionBar;