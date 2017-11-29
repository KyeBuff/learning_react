import React, { Component } from 'react';
import Square from '../first-components/Square.jsx';


class Squares extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}

	}

  render() {
  	return (
  		<Square />
  		<Square />
  	);
  }
}

export default Squares;
