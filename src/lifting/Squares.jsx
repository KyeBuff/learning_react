import React, { Component } from 'react';
import Square from '../first-components/Square.jsx';


class Squares extends Component {

	constructor(props) {
		super(props);
		this.state = {
			flipBorder: false,
		}
		this.flipBorder = this.flipBorder.bind(this);
	}

	flipBorder() {
		this.setState({flipBorder: !this.state.flipBorder});
	}

  render() {
  	return (
  		<div>
	  		<Square 
	  			onClick={this.flipBorder} 
	  			borderColor={this.state.flipBorder ? 'yellow' : 'darkgreen'} />
	  		<Square 
	  			onClick={this.flipBorder} 
	  			borderColor={!this.state.flipBorder ? 'yellow' : 'darkgreen'} />
  		</div>
  	);
  }
}

export default Squares;
