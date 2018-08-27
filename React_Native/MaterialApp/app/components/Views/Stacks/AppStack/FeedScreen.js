import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

export default class AddMediaScreen extends React.Component {
	render() {
		return (
			<Container>
				<Content>
					<Button 
						primary
						rounded
						onPress={() => this.props.navigation.goBack()}
						>
						<Text>Go Back</Text>
					</Button>
				</Content>
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

});