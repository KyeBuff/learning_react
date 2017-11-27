import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';

const Container = () => (
	<div className="container">
		<Header />
		<Aside />
		<Main />
	</div>
);

export default Container;
