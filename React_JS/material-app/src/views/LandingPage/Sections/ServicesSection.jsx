import React from 'react';
// nodejs library that concatenates classes
// import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import CalendarTodayRounded from '@material-ui/icons/CalendarTodayRounded'; 
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import ImageButton from 'components/ImageButton/ImageButton.jsx';

// Import images
import studio1 from 'assets/img/examples/studio-1.jpg';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';

import servicesStyle from 'assets/jss/material-kit-react/views/landingPageSections/servicesStyle.jsx';

class ServicesSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={ classes.section}>
				<div className={ classes.container }>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={8}>
							<h2 className={ classes.title }>Service Section</h2>
						</GridItem>
					</GridContainer>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={4}>
							<ImageButton bgSrc={ studio1 } 
										 icon={ <CalendarTodayRounded /> } 
										 title="Hello World"
										 /> 
							<ImageButton bgSrc={ studio2 } 
										 icon={ <CalendarTodayRounded /> }
										 title="Hello World"
										 />
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<ImageButton bgSrc={ studio3 } 
									  	 icon={ <CalendarTodayRounded /> } 
									  	 title="Hello World"
									  	 />
						</GridItem>
						<GridItem>
							<ImageButton bgSrc={ studio4 } 
										 icon={ <CalendarTodayRounded /> } 
										 title="Hello World"
										 />
							<ImageButton bgSrc={ studio5 } 
							 			 icon={ <CalendarTodayRounded /> } 
							 			 title="Hello World"
							 			 />
						</GridItem>
					</GridContainer>
				</div>
			</div>
			);
	}
}

export default withStyles(servicesStyle)(ServicesSection);