import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

// Import tab views
import HomeTab from '../../../Tabs/Home/HomeTab';
import SearchTab from '../../../Tabs/Search/SearchTab';
import AddMediaTab from '../../../Tabs/AddMedia/AddMediaTab';
import ProfileTab from '../../../Tabs/Profile/ProfileTab';
import SavedTab from '../../../Tabs/Saved/SavedTab';

// Import core components
import AppHeader from '../../../Header/AppHeader';



class MainScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods
	  this.handleOnClick = this.handleOnClick.bind(this);
	  this.handleBackButton = this.handleBackButton.bind(this);
	}

	handleBackButton() {
		this.props.navigation.goBack();
	}

	handleOnClick(dest, push = false) {
		if (push) {
			this.props.navigation.push(dest);
		} else {
			this.props.navigation.navigate(dest);
		}

	}

	static navigationOptions = {
		// headerLeft: <Icon ios="ios-camera-outline" android="md-camera" style={{ paddingLeft: 10 }} />,
		// title: "Main Screen",
		// headerRight: <Icon ios="ios-send-outline" android="md-paper-plane" style={{ paddingRight: 10 }} />
		header: null,
	}
	render() {
		return (
			<AppTabNaviator />
			);
		/*
		return (
			<View style={styles.container}>
				<View style={styles.boxContainer}>
					<Text>Main Screen</Text>
				</View>

				<View style={styles.boxContainer}>
					<Button
						title="Feed Button"
						onPress={() => this.handleOnClick('Feed')}
					/>
				</View>

				<View style={styles.boxContainer}>
					<Button
						title="Add Button"
						onPress={() => this.handleOnClick('Add')}
					/>
				</View>

				<View style={styles.boxContainer}>
					<Button
						title="Profile Button"
						onPress={() => this.handleOnClick('Profile')}
					/>
				</View>

				<View style={styles.boxContainer}>
					<Button
						title="Push Button"
						onPress={() => this.handleOnClick('Main', true)}
					/>
				</View>
				<AppTabNaviator />
			</View>
			);
			*/
	}
}
export default createBottomTabNavigator({
	HomeTab: {
		screen: HomeTab
	}, 

	SavedTab: {
		screen: SavedTab
	},

	SearchTab: {
		screen: SearchTab
	}, 

	AddMediaTab: {
		screen: AddMediaTab
	}, 

	ProfileTab: {
		screen: ProfileTab
	}, 
},

{

	tabBarOptions: {
		style: {
			...Platform.select({
				android: {
					backgroundColor: 'white',
				}
			})
		},
		activeTintColor: '#f44242',
		inactiveTintColor: '#000',
		showLabel: true,
		showIcon: true,
	},
}); 

const AppTabNaviator = createBottomTabNavigator({
	HomeTab: {
		screen: HomeTab
	}, 

	SavedTab: {
		screen: SavedTab
	},

	SearchTab: {
		screen: SearchTab
	}, 

	AddMediaTab: {
		screen: AddMediaTab
	}, 

	ProfileTab: {
		screen: ProfileTab
	}, 
},

{

	tabBarOptions: {
		style: {
			...Platform.select({
				android: {
					backgroundColor: 'white',
				}
			})
		},
		activeTintColor: '#f44242',
		inactiveTintColor: '#000',
		showLabel: true,
		showIcon: true,
	},
}); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxContainer: {
  	margin: 5,
  }

});