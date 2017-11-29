import React from 'react';

const Input = (props) => (
	<div>
		<label>{props.label}</label>
		<input 
			type="text" 
		  onChange={(e)=>{props.onChange(e, props.index)}}
			value={props.value} 
			style={
				{
					border: !props.valid ? '3px solid red' : null,
				}
			}
		/>
	</div>	
);

export default Input;
