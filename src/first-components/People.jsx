import React from 'react';

const people = ['Kye', 'Paul', 'Liz', 'Jonny'];

const People = () => (
	<ul>
		{people.map((person, index) => {
			return (<li key={index}>{person}</li>)
		})}
	</ul>
);

export default People;
