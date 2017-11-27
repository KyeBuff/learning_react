import React from 'react';
import ListGroup from './ListGroup';
import Pagination from './Pagination';
import List from './List';

const pages = [1, 2, 3, 4];
const listGroup = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const Main = () => (
	<main className="col-md-8">
		<p className="lead text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior.</p>
		<p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		<List classTitle="list-group-item" array={listGroup} />
		<List classTitle="pagination" array={pages} />

	</main>
);

export default Main;
