import React, { PropTypes, StyleSheet } from 'react-native';
import IconMenu from './IconMenu';
import TitleText from './TitleText';
import Card from './Card';
import { MAIN_COLOR, BAR_HEIGHT, PADDING, HALF_PADDING } from './theme';

let ActionBar = ({title, menus, onMenuClicked, style}) => (
	<Card style={[styles.container, style]}>
		{menus&&
			menus.filter(menu => menu.position === 'left').map((menu, index) =>
				<IconMenu style={styles.menu} key={index} src={menu.src} size='small' active={menu.active}
					onPress={() => onMenuClicked&&onMenuClicked(menu.key)}/>)
		}
		<TitleText style={styles.title}>{title}</TitleText>
		{menus&&
			menus.filter(menu => menu.position === 'right').map((menu, index) =>
				<IconMenu style={styles.menu} key={index} src={menu.src} size='small' active={menu.active}
					onPress={() => onMenuClicked&&onMenuClicked(menu.key)}/>)
		}
	</Card>
);

ActionBar.propTypes = {
	title: PropTypes.string,
	menus: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired,
		active: PropTypes.bool.isRequired,
		position: PropTypes.oneOf(['left', 'right'])
	})),
	onMenuClicked: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: MAIN_COLOR,
		height: BAR_HEIGHT,
		padding: PADDING,
	},
	menu: {
		marginHorizontal: HALF_PADDING,
	},
	title: {
		color: 'white',
		marginHorizontal: HALF_PADDING,
		flex: 1
	}
});

export default ActionBar;

