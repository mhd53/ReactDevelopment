import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Left, Right, Body, Icon, Button } from 'native-base';

export default class DetailsCard extends React.Component {
	render() {
		return (
			<Card>
				<CardItem header
						  bordered
						  >
						  <Image source={this.props.image}
						  		 style={{ height: 300, width: null, flex: 1 }}
						  		 />
				</CardItem>
				<CardItem bordered style={{height: null, width: null, flex: 1}}>
					<Left>
						<Text style={{ fontSize: 30 }}>
							{this.props.description}
						</Text>
					</Left>
				</CardItem>
				<CardItem bordered style={{ height: null, width: null, flex: 1 }}>
					<Left>
						<Text style={{ fontWeight: "900", fontSize: 24 }}>{this.props.itemPrice}</Text>
					</Left>
					<Right>
						<Button
							primary
							onPress={() => alert("Button #1 Clicked!")}>
							<Text>Play</Text>
						</Button>
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