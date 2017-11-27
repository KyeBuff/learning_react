import React from 'react';

const pages = [1, 2, 3, 4];

const Pagination = () => (
		<ul className="pagination">
			{pages.map((el, index) => {
				return (<li key={index}><a href="">{el}</a></li>)
			})}
		</ul>
);

export default Pagination;
