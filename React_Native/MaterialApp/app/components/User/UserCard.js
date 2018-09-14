import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Thumbnail, Left, Body, Right, Button, Icon, Title, Header } from 'native-base';

// Import core components
import ProfileHeader from '../Header/ProfileHeader';

export default class UserCard extends React.Component {
	render() {
		return (
			<Card transparent>
				<CardItem header>
					<Body style={{alignItems: 'center'}}>
						<View style={{alignItems: 'center'}}>
							<Text style={styles.text}>Me</Text>
							<Text style={styles.text}>US</Text>
						</View>
					</Body>
				</CardItem>
				<CardItem>
					<Body style={{alignItems: 'center'}}>
						<Text style={styles.text}>US</Text>
					</Body>
				</CardItem>
				<CardItem>
					<Left style={{flex: 1, alignItems: 'center'}}>
						<Text style={styles.textNum}>{this.props.numSaves}</Text>
					</Left>
					<Body style={{flex: 1, alignItems: 'center'}}>
						<Text style={styles.textNum}>{this.props.numFollowers}</Text>
					</Body>
					<Right style={{flex: 1, alignItems: 'center'}}>
						<Text style={styles.textNum}>{this.props.numFollowing}</Text>
					</Right>
				</CardItem>
				<CardItem>
					<Left style={{alignItems: 'center'}}>
						<Text style={styles.text}>Saves</Text>
					</Left>
					<Body style={{alignItems: 'center'}}>
						<Text style={styles.text}>Followers</Text>
					</Body>
					<Right style={{alignItems: 'center'}}>
						<Text style={styles.text}>Following</Text>
					</Right>
				</CardItem>
				{/*
				<CardItem>
					<Left>
						<Button transparent 
								onPress={this.props.handleBackButton}>
								<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title style={{color: 'black'}}>
							Profile
						</Title>
					</Body>
					<Right>
						<Button transparent 
								onPress={this.props.handleMoreButton}>
								<Icon name="more" />
						</Button>
					</Right>
				</CardItem>
				<CardItem>
					<Body style={{alignItems: 'center'}}>
						<Thumbnail large source={require('../../assets/images/lion_profile_pic.jpg')} />
					</Body>
				</CardItem>
				<CardItem>
					<Body style={{alignItems: 'center'}}>
						<Text>Render</Text>
					</Body>
				</CardItem>
				*/}
			</Card>
		);

	}

}  

const styles = StyleSheet.create({
	textNum: {
		fontWeight: 'bold',
		fontSize: 16

	},

	text: {
		fontSize: 16
	},

	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});