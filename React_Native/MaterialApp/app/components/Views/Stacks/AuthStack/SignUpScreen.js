import React from 'react';
import { View, StatusBar, StyleSheet, AsyncStorage } from 'react-native';
import {Container, Content, Text, Form, Item, Input, Label, Button, Header, Title, Body } from 'native-base';

export default class SignUpScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods
	  this._signUp = this._signUp.bind(this); 
	}

	async _signUp() {
		await AsyncStorage.setItem("userToken", "abc");
		this.props.navigation.navigate("App");

	}
	static navigationOptions = {
		header: null,
	}

	render() {
		return (
			<Container style={styles.container}>
				<StatusBar backgroundColor="white" />
				<Content>
					<View style={[styles.centerContent, {marginTop: 35}]}>
						<Text style={{fontSize: 32, fontWeight: 'bold', marginBottom: 35}}>Logo</Text>
						<Text primary style={{fontSize: 24, }}>Sign up</Text>
					</View>
					<Form style={{ marginTop: 30}}>
						<Item floatingLabel>
							<Label>E-mail</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input />
						</Item>
					</Form>
					<View style={{ marginTop: 50, marginBottom: 20}}>
						<Button block 
								rounded
								onPress={this._signUp}>
							<Text>Sign Up</Text>
						</Button>
					</View>
					<Body styles={styles.centerButton}>
						<Button transparent
								onPress={() => this.props.navigation.navigate("Login")}
								>
								<Text uppercase={false}>Already signed up?</Text>
						</Button>
					</Body>
				</Content>
			</Container>
		);

	}

}  

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingRight: 20,
		paddingLeft: 20,
		backgroundColor: '#fff',
	},

	centerButton: {
		flexDirection: 'row',
		justifyContent: 'center'
	},

	centerContent: {
		alignItems: 'center',
		justifyContent: 'center'
	},
});