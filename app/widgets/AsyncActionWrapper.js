import React, { Component, PropTypes, StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { THEME_COLOR } from './theme';

class AsyncActionWrapper extends Component {
	componentDidMount() {
		this.props[this.props.initFuncName]();
	}
	render() {
		const {children, running, initFuncName, processPos, ...props} = this.props;

		if (running) {
			return (
				<View style={[styles[processPos], props.style]}>
					<ProgressBarAndroid styleAttr='Normal' indeterminate={true} color={THEME_COLOR}/>
				</View>
			);
		} else {
			return React.cloneElement(children, props);
		}
	}
}

AsyncActionWrapper.propTypes = {
	running: PropTypes.bool.isRequired,
	initFuncName: PropTypes.string.isRequired,
	processPos: PropTypes.oneOf(['center', 'top'])
};

AsyncActionWrapper.defaultProps = {
	running: true,
	initFuncName: 'load',
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