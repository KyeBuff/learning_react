import React from 'react';

const Password = (props) => (
	<div>
		<label>{props.label}</label>
		<input type="password" 
					 value={props.value} 
					 onChange={(e)=>{props.onChange(e, props.i)}} 
					 style={
					 	{
					 		border: props.match ? null : '3px solid red',
					 	}
					 }
		/>
	</div>	
);

export default Password;
