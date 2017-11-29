import React from 'react';

const Counter = (props) => (
	<div>
		<p style={
			{background: props.highest ? 'yellow' : null}
		}
		>{props.value}</p>
		<button onClick={() => {props.handleIncrement(props.i)}}>+</button>
		<button onClick={() => {props.handleDecrement(props.i)}}>-</button>
	</div>
)

export default Counter;
