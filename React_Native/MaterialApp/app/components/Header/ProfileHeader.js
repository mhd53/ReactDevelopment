import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Container, Header, Icon, Text, Left, Right, Body, Button, Thumbnail } from 'native-base'; 
import { Grid, Col, Row } from 'react-native-easy-grid';

export default class ProfileHeader extends React.Component {
	render() {
		return (
			<Header>
					<Left>
						<Button transparent 
								onPress={this.props.handleBackButton}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Right style={{ flex: 1}}>
						<Icon name="more" />
					</Right>
			</Header>
		);

	}

}  