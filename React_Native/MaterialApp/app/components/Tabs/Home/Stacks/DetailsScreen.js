import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

// Import core components
import DetailsCard from '../../../ItemDetails/DetailsCard';
import AppHeader from '../../../Header/AppHeader';

export default class DetailsScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  // Bind methods 
	  this.handleBackButton = this.handleBackButton.bind(this);
	}

	handleBackButton() {
		this.props.navigation.goBack();
	}

	static navigationOptions = ({navigation}) => ({
		header: <AppHeader handleBackButton={() => navigation.goBack()} />,
	})


	render() {
		const image = this.props.navigation.getParam('image', 'No-Image');
		const itemPrice = this.props.navigation.getParam('itemPrice', 'No-Price');
		const itemDescription = this.props.navigation.getParam('itemDescription', 'No-Description');
		console.log("DetailsScreen: image: " + image);
		return (
			<Container>
				<Content>
					<DetailsCard image={image} 
								 description={itemDescription}
								 itemPrice={itemPrice}
								 />
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