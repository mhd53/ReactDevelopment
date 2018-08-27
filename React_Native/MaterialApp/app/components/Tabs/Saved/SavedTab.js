import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class SavedTab extends React.Component {
	static navigationOptions = {
		tabBarLabel: "Saved",
		tabBarIcon: ({ tintColor }) => (
			<Icon ios="ios-heart" android="md-heart" style={{ color: tintColor }} />
			)

	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Saved Tab</Text>
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