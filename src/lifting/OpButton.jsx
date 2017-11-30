import React from 'react';

const OpButton = (props) => (

	<button 
		className="btn btn-danger"
		onClick={() => {props.onClick(props.value)}}
	>
	{props.value}
	</button>

);

export default OpButton;
