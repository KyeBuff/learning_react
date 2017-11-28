import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: null,
			numberList: [],
		}

		this.handleChange = this.handleChange.bind(this);
		this.add = this.add.bind(this);
		this.total = this.total.bind(this);
	}

	handleChange(e) {
		
		const value = e.target.value

		this.setState({ value });
	}

	add() {

		const arr = this.state.numberList.slice();

		arr.push(+this.state.value);

		this.setState({ value: '', numberList: arr });

	}

	total() {

		const arr = this.state.numberList.slice();
		const total = arr.reduce((tot, n) => {
			return tot + n;
		});

		arr.push('Total is: ' + total);

		this.setState({ value: '', numberList: arr });		
	}

	render() {
		return (
			<div>
				<input onChange={this.handleChange} type="number" value={this.state.value}/>
				<button onClick={this.add}>Add</button>
				<button onClick={this.total}>Total</button>
				<ul>
					{this.state.numberList.map((li, i) => {
						return (<li key={i}>{li}</li>);
					})}
				</ul>
			</div>
		);
	}
}

export default Counter;
