import React, { PropTypes, StyleSheet } from 'react-native';
import Layout from './Layout';
import Card from './Card';
import IconButton from './IconButton';

let Dialog = ({closeBtn, title, rightTitleNode, onClose, children}) => (
	<Card elevation={6}>
		{(closeBtn||title)&&
			<Layout row alignCenter spaceBetween>
				{closeBtn?<IconButton src='close' onPress={onClose}/>:<View/>}
				{title}
				{rightTitleNode?rightTitleNode:<View/>}
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
		borderRadius: 6,
		padding: 10
	}
});

export default Dialog;