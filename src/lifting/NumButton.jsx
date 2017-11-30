import React from 'react';

const NumButton = (props) => (

	<button 
		className={'btn ' + (props.selected ? 'btn-danger' : 'btn-primary')}

		onClick={() => {props.onClick(props.value)}}
	>
	{props.value}
	</button>

);

export default NumButton;
