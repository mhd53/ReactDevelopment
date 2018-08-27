import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class AddMediaTab extends React.Component {
	static navigationOptions = {
		tabBarLabel: "Add Item",
		tabBarIcon: ({ tintColor }) => (
			<Icon ios="ios-add-circle" android="md-add-circle" style={{ color: tintColor }} />
			)

	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Add Media Tab</Text>
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