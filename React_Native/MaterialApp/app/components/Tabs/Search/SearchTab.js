import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class SearchTab extends React.Component {
	static navigationOptions = {
		tabBarLabel: "Explore",
		tabBarIcon: ({ tintColor }) => (
			<Icon ios="ios-search" android="md-search" style={{ color: tintColor }} />
			)

	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Search Tab</Text>
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