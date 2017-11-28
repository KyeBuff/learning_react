import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		}

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		if(this.state.counter < this.props.max) {
			this.setState({counter: this.state.counter + 1});
		}
	}

	handleDecrement() {
		if(this.state.counter > 0) {
			this.setState({counter: this.state.counter - 1});
		}
	}

	render() {
		return (
			<div>
				<p>{this.state.counter}</p>
				<button onClick={this.handleIncrement}>+</button>
				<button onClick={this.handleDecrement}>-</button>
			</div>
		);
	}
}

export default Counter;
