import React, { PropTypes, StyleSheet, View } from 'react-native';
import Layout from './Layout';
import Card from './Card';
import IconButton from './IconButton';
import { THEME_COLOR } from './theme';

let Dialog = ({closeBtn, title, rightTitleNode, onClose, children, style}) => (
	<Card elevation={6} style={[styles.container, style]}>
		{(closeBtn||title)&&
			<Layout row alignCenter spaceBetween>
				<View style={styles.titleButtonContainer}>
					{closeBtn&&<IconButton src='close' color={THEME_COLOR} onPress={onClose}/>}
				</View>
				{title}
				<View style={styles.titleButtonContainer}>
					{rightTitleNode}
				</View>
			</Layout>
		}
		{children}
	</Card>
);

Dialog.propTypes = {
	closeBtn: PropTypes.bool,
	rightTitleNode: PropTypes.element,
	title: PropTypes.element,
	onClose: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 6
	},
	titleButtonContainer: {
		height: 60,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Dialog;