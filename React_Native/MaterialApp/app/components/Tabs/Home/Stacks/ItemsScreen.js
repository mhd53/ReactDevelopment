import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Import core components
import ItemCard from '../../../Item/ItemCard';
import AppHeader from '../../../Header/AppHeader';

export default class ItemsScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  // Bind methods
	  this.handleImageClick = this.handleImageClick.bind(this);
	  this.handleBackButton = this.handleBackButton.bind(this);
	}

	handleBackButton() {
		this.props.navigation.goBack();
	}

	handleImageClick() {
		this.props.navigation.navigate("Details", {image: require('../../../../assets/images/fireRobo.jpeg'),
												   itemPrice: "100$",
												   itemDescription: "Hello World",
	});
	}

	static navigationOptions = ({navigation}) => ({
		header: <AppHeader handleBackButton={() => navigation.goBack()} />,
	})

	render() {
		return (
			<Container style={styles.container}>
			<Content>
					<Grid>
						<Row>
							<Col>
								<ItemCard image={require('../../../../assets/images/fireRobo.jpeg')} 
										  itemPrice="100$" 
										  itemStock="10"
										  handleClick={this.handleImageClick}
										  itemName={"Fireworks"}
										  />
							</Col>
							<Col>
							</Col>
						</Row>
					</Grid>
				</Content>
			</Container>
		);

	}

}  

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});