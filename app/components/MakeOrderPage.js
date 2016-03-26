import React, { Component, PropTypes, StyleSheet, View, ViewPagerAndroid } from 'react-native';
import { DialogPage, TextInput, StepsIndicator, Layout, Button } from '../widgets';

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
			<DialogPage>
				<StepsIndicator steps={['Add Items', 'Add Address', 'Delivery Fee']}
					currentStep={this.state.currentStep}/>
				<ViewPagerAndroid style={styles.container} initialPage={0} ref='viewPager'>
					<View style={styles.pageItem}>
						<TextInput multiline style={styles.pageItem} autoFocus/>
						<Layout row right>
							<Button onPress={this.gotToPage.bind(this, 1)}>Next</Button>
						</Layout>
					</View>
					<View style={styles.pageItem}>
						<TextInput multiline style={styles.pageItem} autoFocus/>
						<Layout row spaceBetween>
							<Button onPress={this.gotToPage.bind(this, 0)}>Previous</Button>
							<Button onPress={this.gotToPage.bind(this, 2)}>Next</Button>
						</Layout>
					</View>
					<View style={styles.pageItem}>
						<TextInput multiline style={styles.pageItem} autoFocus/>
						<Layout row spaceBetween>
							<Button onPress={this.gotToPage.bind(this, 1)}>Previous</Button>
							<Button>Finish</Button>
						</Layout>
					</View>
				</ViewPagerAndroid>
			</DialogPage>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 150
	},
	pageItem: {
		flex: 1
	}
});

export default MakeOrderPage;