import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			celsius: this.props.cels,
			fahrenheit: null,
		}

		this.celsiusChange = this.celsiusChange.bind(this);
		this.fahrChange = this.fahrChange.bind(this);
	}

	celsiusChange(e) {
		
		const celsius = +e.target.value;

		const celsToFarh = celsius * 1.8 + 32;

		this.setState({ celsius, fahrenheit: celsToFarh });
	}

	fahrChange(e) {
		
		const fahrenheit = +e.target.value;

		const fahrToCels = (fahrenheit - 32) / 1.8;

		this.setState({ fahrenheit, celsius: fahrToCels });
	}

	render() {
		return (
			<div>
				<input onChange={this.celsiusChange} type="number" placeholder="Celsius" value={this.state.celsius}/>
				<input onChange={this.fahrChange} type="number" placeholder="fahrenheit" value={this.state.fahrenheit}/>
			</div>
		);
	}
}

export default Counter;
