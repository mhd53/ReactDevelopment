import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Thumbnail } from 'native-base';

export default class UserHoverPicture extends React.Component {
	render() {
		return (
			<View style={{position: 'absolute', top: 75, left: 0, bottom: 0, right: 0, alignItems: 'center', zIndex: 3000}}>
				<View style={{borderWidth: 5, borderColor: 'white', borderRadius: 50, margin: 20}}>
					<Thumbnail large source={require('../../assets/images/lion_profile_pic.jpg')} />
				</View>
			</View>
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