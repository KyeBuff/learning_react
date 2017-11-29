import React from 'react';

const Button = (props) => (

	<button 
		className={'btn ' + (props.selected ? 'btn-danger' : 'btn-primary')}

		onClick={() => {props.onClick(props.index)}}
	>
	{props.value}
	</button>

);

export default Button;
