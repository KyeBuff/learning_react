import React from 'react';

const FadeIn = ({children, time}) => (

	<div style={
		{
			animationName: 'fadeIn',
			animationDuration: time,
		}
	}>{children}</div>
);

export default FadeIn;
