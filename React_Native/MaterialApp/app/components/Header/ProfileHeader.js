import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Icon, Text, Left, Right, Body, Button, Thumbnail, Title } from 'native-base'; 
import { Grid, Col, Row } from 'react-native-easy-grid';

export default class ProfileHeader extends React.Component {
	render() {
		return (
			<Header span>
					<Left>
						<Button transparent 
								onPress={this.props.handleBackButton}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body >
						<Title>
							Profile
						</Title>
						<View style={{position: 'absolute'}}>
						</View>
					</Body>
					<Right>
						<Icon name="more" />
					</Right>
			</Header>
		);

	}

}  