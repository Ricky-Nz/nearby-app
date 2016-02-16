import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class NearbyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          03f
        </Text>
        <Text style={styles.instructions}>
          
        </Text>
        <Text style={styles.instructions}>
          
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default NearbyApp;