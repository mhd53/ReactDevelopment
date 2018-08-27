import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Left, Right, Body, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Presentation Component
export default class ItemCard extends React.Component {
	
	render() {
		return (
			<Card>
				<CardItem header 
						  bordered 
						  button 
						  cardBody
				          onPress={this.props.handleClick}
				          >
					<Image source={this.props.image} 
						   style={{height: 200, width: null, flex: 1 }} 
						   />
				</CardItem>
				<CardItem style={{ height: 25 }} >
					<Left>
						<Text style={{fontWeight: "900"}}>{this.props.itemPrice}</Text>
					</Left>
					<Text style={{fontWeight: "900", color:  "#4245f4"}}>450 m</Text>
					<Right>
						<Icon ios="ios-heart" android="md-heart" style={{ color: '#ff1414'}} />
					</Right>
				</CardItem>
				<CardItem bordered style={{ height: 20 }}>
					<Left>
					</Left>
					<Text style={{ color: "#87838B" }}>{ this.props.itemStock }</Text>
					<Right>
					</Right>
				</CardItem>
			</Card>
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