import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import {Container, Content, Text, Form, Item, Input, Label, Button, Header, Title, Body } from 'native-base';

export default class ForgotPasswordScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods
	  this._forgotPassword = this._forgotPassword.bind(this);
	}

	_forgotPassword() {
		this.props.navigation.navigate("SelectForm");
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
						<Text primary style={{fontSize: 24, }}>Forgot password</Text>
					</View>
					<Form style={{ marginTop: 30}}>
						<Item floatingLabel>
							<Label>E-mail</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Confirm E-mail</Label>
							<Input />
						</Item>
					</Form>
					<View style={{ marginTop: 50, marginBottom: 20}}>
						<Button block 
								rounded
								onPress={this._forgotPassword}>
							<Text>Reset Password</Text>
						</Button>
					</View>
					<Body style={styles.centerButton}>
						<Button transparent
								onPress={() => this.props.navigation.navigate("Login")}
								>
								<Text uppercase={false}>Remember password?</Text>
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
		backgroundColor: '#fff',
		paddingRight: 20,
		paddingLeft: 20,
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