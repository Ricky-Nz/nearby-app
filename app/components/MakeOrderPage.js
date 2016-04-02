import React, { Component, PropTypes, StyleSheet } from 'react-native';
import { TransparentPage, Dialog } from '../widgets';
import { OrderCreatePanelContainer } from '../containers';

class MakeOrderPage extends Component {
	constructor(props) {
		super(props);
		this.state = { currentStep: 0 };
	}
	gotToPage(position) {
		this.refs.viewPager.setPage(position);
		this.setState({ currentStep: position });
	}
	render() {
		return (
			<TransparentPage>
				<Dialog style={styles.dialog}>
					<OrderCreatePanelContainer/>
				</Dialog>
			</TransparentPage>
		);
	}
}

const styles = StyleSheet.create({
	dialog: {
		height: 200
	}
});

export default MakeOrderPage;