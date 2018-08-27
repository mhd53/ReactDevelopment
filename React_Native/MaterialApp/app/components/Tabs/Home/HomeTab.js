import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { createStackNavigator, withNavigation } from 'react-navigation';

// Import core components
import ItemCard from '../../Item/ItemCard';
import AppHeader from '../../Header/AppHeader';

// Import screens
import ItemsScreen from './Stacks/ItemsScreen';
import DetailsScreen from './Stacks/DetailsScreen';

class HomeTab extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	}

	handleBackButton() {
		this.props.navigation.goBack();
	}


	static navigationOptions = {
		tabBarLabel: "My Feed",
		tabBarIcon: ({ tintColor }) => (
			<Icon ios="ios-home" android="md-home" style={{ color: tintColor }} />
			),

	}

	render() {
		return (
			<HomeStackNavigator />
			);
	}

}

const HomeStackNavigator = createStackNavigator({
	Home: {
		screen: ItemsScreen
	},

	Details: {
		screen: DetailsScreen
	},
},

{
	initialRouteName: 'Home',
}

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

export default withNavigation(HomeTab);