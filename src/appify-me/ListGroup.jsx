import React from 'react';

let listGroup = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const ListGroup = () => (
		<ul className="list-group">
			{listGroup.map((el, index) => {
				return (<li key={index} className="list-group-item">{el}</li>)		
			})}
		</ul>
);

export default ListGroup;
