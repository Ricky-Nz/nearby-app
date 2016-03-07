import React, { Component, StyleSheet, TouchableHighlight,
	ScrollView, NavigationExperimental, Animated, View, Text, TouchableOpacity, PixelRatio } from 'react-native';
const {
	AnimatedView: NavigationAnimatedView,
	Card: NavigationCard,
	Container: NavigationContainer,
	RootContainer: NavigationRootContainer,
	Reducer: NavigationReducer,
	Header: NavigationHeader
} = NavigationExperimental;
const {
	JumpToAction
} = NavigationReducer.TabsReducer;

class NavigationExampleTabBar extends Component {
	render() {
		return (
      <View style={styles.tabBar}>
        {this.props.tabs.map(this._renderTab.bind(this))}
      </View>
		);
	}
  _renderTab(tab, index) {
    var textStyle = [styles.tabButtonText];
    if (this.props.index === index) {
      textStyle.push(styles.selectedTabButtonText);
    }
    return (
      <TouchableOpacity
        style={styles.tabButton}
        key={tab.key}
        onPress={() => {
          this.props.onNavigate(JumpToAction(index));
        }}>
        <Text style={textStyle}>
          {tab.key}
        </Text>
      </TouchableOpacity>
    );
  }
}
NavigationExampleTabBar = NavigationContainer.create(NavigationExampleTabBar);

class NavigationExampleRow extends Component {
	render() {
		return this.props.onPress ? (
      <TouchableHighlight
        style={styles.row}
        underlayColor="#D0D0D0"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
		) : (
      <View style={styles.row}>
        <Text style={styles.rowText}>
          {this.props.text}
        </Text>
      </View>
		);
	}
}

class ExampleTabPage extends Component {
	render() {
		const currentTabRoute = this.props.tabs[this.props.index];

		return (
			<ScrollView style={styles.tabPage}>
        <NavigationExampleRow
          text={`Current Tab is: ${currentTabRoute.key}`}/>
        {this.props.tabs.map((tab, index) => (
          <NavigationExampleRow
            key={tab.key}
            text={`Go to ${tab.key}`}
            onPress={() => {
              this.props.onNavigate(NavigationReducer.TabsReducer.JumpToAction(index));
            }}/>
        ))}
        <NavigationExampleRow
          text="Exit Tabs Example"
          onPress={this.props.onExampleExit}/>
			</ScrollView>
		);
	}
}
ExampleTabPage = NavigationContainer.create(ExampleTabPage);

const ExampleTabsReducer = NavigationReducer.TabsReducer({
	tabReducers: [
		(lastRoute) => lastRoute || {key: 'one'},
		(lastRoute) => lastRoute || {key: 'two'},
		(lastRoute) => lastRoute || {key: 'three'}
	]
});

class App extends Component {
	render() {
		return (
			<NavigationRootContainer
				reducer={ExampleTabsReducer}
				persistencekey='NAV_EXAMPLE_STATE_TABS'
				ref={navRootContainer => { this.navRootContainer = navRootContainer }}
				renderNavigation={(navigationState) => {
					if (!navigationState) return null;

					return (
						<View style={styles.topView}>
							<ExampleTabPage
								tabs={navigationState.children}
								index={navigationState.index}
								onExampleExit={this.props.onExampleExit}/>
							<NavigationExampleTabBar
								tabs={navigationState.children}
								index={navigationState.index}/>
						</View>
					)
				}}/>
		);
	}
}

const NavigationBasicReducer = NavigationReducer.StackReducer({
	getPushedReducerForAction: (action) => {
			if (action.type === 'push') {
				return (state) => state || { key: action.key };
			} else {
				return null;
			}
	},
	getReducerForState: (initialState) => (state) => state || initialState,
	initialState: {
		key: 'AnimatedExampleStackKey',
		index: 0,
		children: [
			{ key: 'First Route' }
		]
	}
});

class NavigationAnimatedExample extends Component {
	render() {
		return (
			<NavigationRootContainer
				reducer={NavigationBasicReducer}
				ref={navigationContainer => this.navRootContainer = navRootContainer}
				persistencekey='NavigationAnimExampleState'
				renderNavigation={this._renderNavigation.bind(this)}/>
		);
	}
	_renderNavigation(navigationState, onNavigate) {
		if (!navigationState) return null;
		return (
			<NavigationAnimatedView
				navigationState={navigationState}
				style={styles.animatedView}
				renderOverlay={props => (<NavigationHeader
					navigationState={props.navigationState}
					position={props.position}
					getTitle={state => state.key}/>)}
				setTiming={(pos, navState) =>
					Animated.timing(pos, { toValue: navState.index, duration: 1000 }).start()}
				renderScene={props => (
					<NavigationCard
						key={props.navigationState.key}
						index={props.index}
						navigationState={props.navigationState}
						position={props.position}
						layout={props.layout}>
						<ScrollView style={styles.scrollView}>
							<NavigationExampleRow text={props.navigationState.key}/>
							<NavigationExampleRow text='Push!'
								onPress={() => onNavigate({type: 'push', key: `Route # ${props.navigationState.children.length}`})}/>
							<NavigationExampleRow text='Exit Anitmated Nav Example'
								onPress={this.props.onExampleExit}/>
						</ScrollView>
					</NavigationCard>
				)}/>
		);
	}
}

const styles = StyleSheet.create({
  animatedView: {
    flex: 1,
  },
  scrollView: {
    marginTop: 64
  },
  topView: {
    flex: 1,
    paddingTop: 30,
  },
  tabPage: {
    backgroundColor: '#E9E9EF',
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  tabBar: {
    height: 50,
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
  },
  tabButtonText: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  selectedTabButtonText: {
    color: 'blue',
  }
});

export default NavigationAnimatedExample;

