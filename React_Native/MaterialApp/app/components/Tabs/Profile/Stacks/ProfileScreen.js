import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Icon, Container, Thumbnail, Left, Right, Body, Button, Text } from 'native-base';
import { Grid, Row, Col  } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';

// Import core components
import ProfileHeader from '../../../Header/ProfileHeader';
import UserCard from '../../../User/UserCard';
import UserHoverPicture from '../../../User/UserHoverPicture';

class ProfileScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods
	  this._signOut = this._signOut.bind(this);
	}

	async _signOut() {
		await AsyncStorage.removeItem("userToken");
		this.props.screenProps.rootNavigation.navigate("Auth");


	}

	static navigationOptions = ({navigation}) => ({
		/*
		header: <ProfileHeader handleBackButton={() => this.props.navigation.goBack()} 
							   handleSignout={() =>  this.props.navigation.navigate("Auth")} />,
	    */
	   header: null,
	})

	render() {
		return (
			<Container>
				<ProfileHeader />
				<UserHoverPicture />
				<View style={{marginTop: 35}}>
					<UserCard numSaves={0} numFollowers={200} numFollowing={1} />
				</View>
				<Grid>
					<Row size={2} backgroundColor="green" style={{ alignItems: 'center', justifyContent: 'center'}}>
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