import React from 'react';

const NumButton = (props) => (

	<button 
		className="btn btn-primary"

		onClick={() => {props.onClick(props.value)}}
	>
	{props.value}
	</button>

);

export default NumButton;
