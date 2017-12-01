import React from 'react';

const Square = (props) => (
	<div 
		onClick={props.onClick}
		style={
			{
				backgroundColor: props.color, 
				height: props.divHeight, 
				width: props.divWidth, 
				borderWidth: '5px',
				borderStyle:  'solid',
				borderColor: props.borderColor,
			}
		}
		></div>	
);

Square.defaultProps = {
	color: 'tomato',
	divHeight: '200px',
	divWidth: '200px',
	borderColor: 'Black',
}

export default Square;
