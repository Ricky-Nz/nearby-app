import React, { PropTypes, StyleSheet, View } from 'react-native';
import Layout from './Layout';
import Card from './Card';
import IconButton from './IconButton';
import ProgressWrapper from './ProgressWrapper';
import { THEME_COLOR } from './theme';

let Dialog = ({loading, closeBtn, title, rightTitleNode, onClose, children}) => (
	<Card elevation={6} style={styles.container}>
		<ProgressWrapper style={styles.progressContainer} loading={loading}>
			<View>
				{(closeBtn||title)&&
					<Layout row alignCenter spaceBetween>
						{closeBtn?<IconButton src='close' color={THEME_COLOR} onPress={onClose}/>:<View/>}
						{title}
						{rightTitleNode?rightTitleNode:<View/>}
					</Layout>
				}
				{children}
			</View>
		</ProgressWrapper>
	</Card>
);

Dialog.propTypes = {
	loading: PropTypes.bool,
	closeBtn: PropTypes.bool,
	rightTitleNode: PropTypes.element,
	title: PropTypes.element,
	onClose: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 6,
		padding: 20
	},
	progressContainer: {
		height: 200
	}
});

export default Dialog;