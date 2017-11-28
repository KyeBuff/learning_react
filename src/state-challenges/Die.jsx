import React, { Component } from 'react';

class Die extends Component {

	constructor(props) {
		super(props);
		this.state = {
			die: null,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const die = Math.ceil(Math.random() * 6); 

		this.setState({die: die});
	}

	render() {
		return (
			<p 
				onClick={this.handleClick}
				style={{height: '50px', width: '50px', margin: '100px auto', backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '1% 0', fontSize: '18px'}}
			>
				{this.state.die ? this.state.die : 'Click'}
			</p>
		);
	}
}

export default Die;
