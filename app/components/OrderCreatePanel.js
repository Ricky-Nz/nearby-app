import React, { Component, PropTypes, StyleSheet, View, ViewPagerAndroid } from 'react-native';
import { Layout, StepsIndicator, TextInput, Button, Text, NumberOperatePanel } from '../widgets';

class OrderCreatePanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 0,
			items: '',
			address: '',
			fees: 3
		};
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.running&&this.props.running) {
			this.props.onSuccess();
		}
	}
	onNext() {
		if (this.state.currentStep === (this.props.steps.length - 1)) {
			this.props.makeOrder(this.state);
		} else {
			const newPos = this.state.currentStep + 1;
			this.setState({ currentStep: newPos });
			this.refs.viewPager.setPage(newPos);
		}
	}
	onPrevious() {
		if (this.state.currentStep > 0) {
			const newPos = this.state.currentStep - 1;
			this.setState({ currentStep: newPos });
			this.refs.viewPager.setPage(newPos);
		}
	}
	onInputChange(name, text) {
		this.setState({[name]: text});
	}
	render() {
		const { steps, running, style } = this.props;
		const { currentStep, items, address, fees } = this.state;

		return (
			<View style={styles.rootContainer}>
				<StepsIndicator steps={steps} currentStep={currentStep}/>
				<ViewPagerAndroid style={styles.container} initialPage={0} ref='viewPager'>
					<View style={styles.container}>
						<View style={styles.container}>
							<TextInput multiline autoFocus
								placeholder='Describe what you want to order'
								value={items} onChangeText={this.onInputChange.bind(this, 'items')}/>
						</View>
						<Layout row end>
							<Button disabled={!items} wMode='primary' wSize='sm' onPress={this.onNext.bind(this)}>Next</Button>
						</Layout>
					</View>
					<View style={styles.container}>
						<View style={styles.container}>
							<TextInput multiline
								placeholder='Please enter your address'
								value={address} onChangeText={this.onInputChange.bind(this, 'address')}/>
						</View>
						<Layout row spaceBetween>
							<Button wSize='sm' onPress={this.onPrevious.bind(this)}>Previous</Button>
							<Button disabled={!address} wMode='primary' wSize='sm' onPress={this.onNext.bind(this)}>Next</Button>
						</Layout>
					</View>
					<View style={styles.container}>
						<Layout cneter alignCenter style={styles.container}>
							<Text align='center' wMode='sub' wSize='sm'>Pay a small amount of delivery fee on top of the item price to deliverer</Text>
							<NumberOperatePanel value={fees} description='SGD / Order'
								onValueUpdate={this.onInputChange.bind(this, 'fees')}/>
						</Layout>
						<Layout row spaceBetween>
							<Button wSize='sm' onPress={this.onPrevious.bind(this)}>Previous</Button>
							<Button running={running} disabled={!fees} wMode='primary' wSize='sm' onPress={this.onNext.bind(this)}>Submit</Button>
						</Layout>
					</View>
				</ViewPagerAndroid>
			</View>
		);
	}
}

OrderCreatePanel.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.string),
	running: PropTypes.bool,
	makeOrder: PropTypes.func.isRequired,
	onSuccess: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		paddingHorizontal: 18,
		paddingBottom: 12
	},
	container: {
		flex: 1
	}
});

export default OrderCreatePanel;

