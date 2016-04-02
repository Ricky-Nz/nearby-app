import React, { PropTypes, StyleSheet } from 'react-native';
import { TransparentPage, Dialog } from '../widgets';
import { OrderCreateContainer } from '../containers';

let OrderCreatePage = ({onBack}) => (
	<TransparentPage>
		<Dialog style={styles.dialog}>
			<OrderCreateContainer onSuccess={onBack}/>
		</Dialog>
	</TransparentPage>
);

OrderCreatePage.propTypes = {
	onBack: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	dialog: {
		height: 230
	}
});

export default OrderCreatePage;