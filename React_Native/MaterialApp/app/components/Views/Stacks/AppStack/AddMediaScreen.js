import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MainScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Add Media Screen</Text>
			</View>
			);
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});