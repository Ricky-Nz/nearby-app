import React, { Component, PropTypes, StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { THEME_COLOR } from './theme';

class AsyncActionWrapper extends Component {
	componentDidMount() {
		this.props[this.props.initFuncName]();
	}
	render() {
		const {children, finished, initFuncName, processPos, ...props} = this.props;

		if (finished) {
			return React.cloneElement(children, props);
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
	initFuncName: PropTypes.string,
	processPos: PropTypes.oneOf(['center', 'top'])
};

AsyncActionWrapper.defaultProps = {
	finished: false,
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