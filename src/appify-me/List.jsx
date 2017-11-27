import React from 'react';

const ListGroup = (props) => (
		<ul className="list-group">
			{props.array.map((el, index) => {
				return (<li key={index} className={props.classTitle}>{el}</li>)		
			})}
		</ul>
);

export default ListGroup;
