import React, { Component, PropTypes, StyleSheet, View, ToastAndroid } from 'react-native';
import { TransparentPage, Dialog, Layout, Text, Button, TextInput, HorizontalLine } from '../widgets';
import AccountPanel from './AccountPanel';

class ReviewCreateDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: ''
		};
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.running&&this.props.running) {
			if (nextProps.error) {
				ToastAndroid.show(nextProps.error, ToastAndroid.SHORT);
			} else {
				this.props.onBack();
			}
		}
	}
	onCreateReview() {
		this.props.createReview(this.state);
	}
	render() {
		const { deliverer_user, running, createReview } = this.props;
		const { rating, comment } = this.state;

		return (
			<TransparentPage>
				<Dialog>
					<Layout alignCenter padding>
						<AccountPanel avatarUrl={deliverer_user.photo.url}
							name={deliverer_user.name} marking={rating}/>
						<Text wSize='sm' wMode='sub'></Text>
						<HorizontalLine/>
						<View style={styles.inputContainer}>
							<TextInput multiline autoFocus
								placeholder='say somthing' value={comment}
								onChangeText={comment => this.setState({comment})}/>
						</View>
						<Layout row end>
							<Button running={running} wMode='primary' disabled={rating >= 0}
								wSize='sm' onPress={this.onCreateReview.bind(this)}>Submit</Button>
						</Layout>
					</Layout>
				</Dialog>
			</TransparentPage>
		);
	}
}

ReviewCreateDialog.propTypes = {
	deliverer_user: PropTypes.object.isRequired,
	running: PropTypes.bool,
	error: PropTypes.string,
	createReview: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	inputContainer: {
		height: 80
	}
});

export default ReviewCreateDialog;

