import React from 'react';

const Square = ({color, divHeight, divWidth}) => (
	<div style={{backgroundColor: color, height: divHeight, width: divWidth}}></div>
);

Square.defaultProps = {
	color: 'red',
	divHeight: '200px',
	divWidth: '200px',
}

export default Square;
