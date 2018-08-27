import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Text, Title, Button, Header, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class WelcomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	}
	render() {
		return (
			<Container style={styles.container}>
				<StatusBar backgroundColor="#4286f4" />
				<Grid>
					<Row style={styles.centerContent}>
						<Text style={styles.text, styles.title}>Welcome</Text>
					</Row>
					<Row style={styles.centerContent}>
						<Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
					</Row>
					<Row>
						<Right style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
							<Button
									rounded
									onPress={() => this.props.navigation.navigate("SelectForm")}
									>

								<Text>Next</Text>
							</Button>
						</Right>
					</Row>
				</Grid>
			</Container>
		);

	}

}  

const styles = StyleSheet.create({
	container: {
		padding: 24,
		flex: 1,
		backgroundColor: '#4286f4',
		alignItems: 'center',
		justifyContent: 'center',
	},

	centerContent: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		color: 'white',

	},

	title: {
		fontSize: 32,
		color: 'white',
		marginBottom: 5,
	}
});