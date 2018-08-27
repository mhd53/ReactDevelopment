import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

export default class SelectFormScreen extends React.Component {
	static navigationOptions = {
		header: null,
	}
	render() {
		return (
			<Container style={styles.container}>
				<StatusBar backgroundColor="#f44242" />
				<Content>
					<View style={[styles.centerContent, {marginTop: 35}]}>
						<Text style={{fontSize: 32, fontWeight: 'bold', marginBottom: 35}}>Logo</Text>
						<Text primary style={{fontSize: 24, }}>Powered by react.</Text>
					</View>
					<View style={{ marginTop: 100, marginBottom: 20}}>
						<Button block 
								rounded
								onPress={() => this.props.navigation.navigate("SignUp")}>
							<Text>Sign Up</Text>
						</Button>
					</View>
					<View>
						<Button block 
								rounded
								onPress={() => this.props.navigation.navigate("Login")}>
							<Text>Log in</Text>
						</Button>
					</View>
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
		backgroundColor: '#f44242',
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