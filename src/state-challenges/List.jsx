import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			listItems: [],
		}

		this.handleChange = this.handleChange.bind(this);
		this.addLI = this.addLI.bind(this);
	}

	handleChange(e) {
		
		const value = e.target.value

		this.setState({ value });
	}

	addLI() {

		const arr = this.state.listItems.slice();

		arr.push(this.state.value);

		this.setState({ value: '', listItems: arr });

	}

	render() {
		return (
			<div>
				<input onChange={this.handleChange} value={this.state.value}/>
				<button onClick={this.addLI}>Add</button>
				<ul>
					{this.state.listItems.map((li, i) => {
						return (<li key={i}>{li}</li>);
					})}
				</ul>
			</div>
		);
	}
}

export default Counter;
