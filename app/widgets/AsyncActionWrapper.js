import React, { Component, PropTypes, StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { THEME_COLOR } from './theme';

class AsyncActionWrapper extends Component {
	componentDidMount() {
		this.props.onLoad();
	}
	render() {
		const {children, finished, result, onLoad, initFuncName, processPos, ...props} = this.props;

		if (finished) {
			return React.cloneElement(children, {...result, onLoad});
		} else {
			return (
				<View style={[styles[processPos], props.style]}>
					<ProgressBarAndroid styleAttr='Normal' indeterminate={true} color={THEME_COLOR}/>
				</View>
			);
		}
	}
}

AsyncActionWrapper.propTypes = {
	finished: PropTypes.bool,
	processPos: PropTypes.oneOf(['center', 'top'])
};

AsyncActionWrapper.defaultProps = {
	finished: false,
	processPos: 'center'
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	top: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 50
	}
});

export default AsyncActionWrapper;