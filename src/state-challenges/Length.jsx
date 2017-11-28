import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		
		const value = e.target.value

		this.setState({ value });
	}

	render() {
		return (
			<div>
				<input onChange={this.handleChange} value={this.state.value}/>
				<p>{this.state.value.length}</p>
			</div>
		);
	}
}

export default Counter;
