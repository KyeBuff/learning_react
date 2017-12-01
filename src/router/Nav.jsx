import React from 'react';
import { Link } from 'react-router-dom';

let Nav = () =>  (

	<nav>
		<Link to="/buttons">
			Buttons
		</Link><br />
		<Link to="/list">
			List
		</Link><br />
		<Link to="/clicked">
			Clicked
		</Link><br />
		<Link to="/adder">
			Adder
		</Link><br />
		<Link to="/square/orange">
			Square
		</Link><br />
		<Link to="/step-counter/100/5">
			Step counter
		</Link><br />
		<Link to="/toggle-text">
			Toggle Text
		</Link><br />
		<Link to="/catch">
			Catch me if you can
		</Link><br />
		<Link to="/lame/10">
			Lame Game
		</Link><br />
	</nav>

);

export default Nav;
