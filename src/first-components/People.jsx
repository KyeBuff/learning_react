import React from 'react';

const People = (props) => (
	<ul>
		{
			props.names.map((person, index) => {
			return (<li key={index}>{person}</li>)
		})}
	</ul>
);

People.defaultProps = {
	names: ['Nothing to see here.'],
}

export default People;
