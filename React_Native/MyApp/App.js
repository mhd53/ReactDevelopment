import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Import core components
// import AppBar from 'MyApp/src/components/AppBar/AppBar';
import AppBar from './src/components/AppBar/AppBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer, styles.header}>
          <AppBar />
        </View>
        <View style={styles.boxContainer, styles.content}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  boxContainer: {
    flex: 1,
    justifyContent: 'center', // main axis
    alignItems: 'center', // cross axis

  },

  header: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  content: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },



  headContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',

  }
});
