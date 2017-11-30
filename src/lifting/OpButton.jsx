import React from 'react';

const OpButton = (props) => (

	<button 
		className={'btn ' + (props.selected ? 'btn-danger' : 'btn-danger')}
		onClick={() => {props.onClick(props.value)}}
	>
	{props.value}
	</button>

);

export default OpButton;
