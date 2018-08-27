import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Icon, Container, Thumbnail, Left, Right, Body, Button, Text } from 'native-base';
import { Grid, Row, Col  } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';

// Import core components
import ProfileHeader from '../../../Header/ProfileHeader';

class ProfileScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods
	  this._signOut = this._signOut.bind(this);
	}

	async _signOut() {
		await AsyncStorage.clear();
		this.props.navigation.navigate("Auth");

	}

	static navigationOptions = ({navigation}) => ({
		header: <ProfileHeader handleBackButton={() => this.props.navigation.goBack()} 
							   handleSignout={() =>  this.props.navigation.navigate("Auth")} />,
	})

	render() {
		return (
			<Container>
				<Grid>
					<Row size={2} backgroundColor="green" style={{ alignItems: 'center', justifyContent: 'center'}}>
						<Thumbnail large source={require('../../../../assets/images/lion_profile_pic.jpg')} />
					</Row>
					<Row size={1} backgroundColor="red" style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ fontWeight: 'bold', color: 'white'}}>Hello, World!</Text>
					</Row>
					<Row size={1} backgroundColor="blue" style={{ alignItems: 'center', justifyContent: 'center'}}>
						<Body style={styles.centerContent}>
							<Button
									iconLeft
									danger
									onPress={this._signOut}
									>
									<Icon type="MaterialIcons" name="exit-to-app" />
									<Text>Sign out</Text> 
							</Button>
						</Body>
					</Row>
					<Row size={4}>
					</Row>
				</Grid>
			</Container>
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

  centerContent: {
  	flexDirection: 'row',
  	justifyContent: 'center',
  },

});

export default withNavigation(ProfileScreen);