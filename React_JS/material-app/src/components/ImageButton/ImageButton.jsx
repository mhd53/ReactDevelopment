import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import imageButtonStyle from "assets/jss/material-kit-react/components/imageButtonStyle.jsx";
import Button from "components/CustomButtons/Button.jsx"; 

function ImageButton({ ... props }) {
	const { classes, className, children, bgSrc, icon, title, ...rest } = props;
	const buttonClasses = classNames(classes.imageButton, className);
	const navImageClasses = classNames(classes.image, classes.imgRounded, classes.imgGallery);

	return (
		<Button className={ buttonClasses } {...rest}>

			<img 
				alt="..."
				src={bgSrc}
				className={navImageClasses}
				/>
			<div className={classes.floatIcon}>
				{icon}
			</div>
			<h5 className={classes.title}>{title}</h5>
		</Button>
		);
}

ImageButton.propTypes = {
	classes: PropTypes.object.isRequired,
	icon: PropTypes.object,




};

export default withStyles(imageButtonStyle)(ImageButton);