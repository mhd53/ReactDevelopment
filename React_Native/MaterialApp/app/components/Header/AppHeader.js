import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Icon, Text, Left, Right, Body, Button } from 'native-base'; 
import { Constants } from 'expo';

export default class AppHeader extends React.Component {
	render() {
		return (
			<Header>
				<Left>
					<Button transparent 
							onPress={this.props.handleBackButton}>
					<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body>
					<Text>Header</Text>
				</Body>
				<Right>
					<Icon name="more" />
				</Right>
			</Header>
		);

	}

}  

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: "#C2185B",
		height: Constants.statusBarHeight,

	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});