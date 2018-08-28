import React from 'react';
import { View, Text, StyleSheet, StatusBar, AsyncStorage  } from 'react-native';
import { Container, Content, Spinner } from 'native-base';

export default class AuthLoadingScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	}

	componentDidMount() {
		this.checkUserAuth();

	}

	async checkUserAuth() {
		// Fetch the token from storage, then navigate to appropriate stackNav.    
		const userToken = await AsyncStorage.getItem('userToken'); 
		// await AsyncStorage.clear();

		// This will switch to appStack or authStack and this loading screen
		// will be unmounted and thrown away.      
		this.props.navigation.navigate(userToken ? 'App' : 'Welcome');
	}

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	render() {
		return (
			<Container style={styles.container}>
				<Spinner color="blue" />
				<StatusBar barStyle="default" />
			</Container>
		);

	}
}  

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}

});