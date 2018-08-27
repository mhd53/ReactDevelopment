import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator, withNavigation } from 'react-navigation';

// Import screens
import ProfileScreen from './Stacks/ProfileScreen';

class ProfileTab extends React.Component {
	static navigationOptions = {
		tabBarLabel: "Profile",
		tabBarIcon: ({ tintColor }) => (
			<Icon ios="ios-person" android="md-person" style={{ color: tintColor }} />
			)

	}

	render() {
		return (
			<ProfileStackNavigator />
			);
	}
}

const ProfileStackNavigator = createStackNavigator({
	Profile: {
		screen: ProfileScreen
	},

},

{
	initialRouteName: 'Profile',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default withNavigation(ProfileTab);