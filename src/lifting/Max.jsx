import React, { Component } from 'react';
import Counter from '../state-challenges/Counter.jsx';

class Max extends Component {

	constructor(props) {
		super(props);
		this.state = {
			numbers: props.count,
		}
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement(i) {
		let arr = this.state.numbers.slice();

		if(this.state.numbers[i] < this.props.max) {
			arr[i] += 1;
			this.setState({numbers: arr});
		}
	}

	handleDecrement(i) {
		let arr = this.state.numbers.slice();

		if(this.state.numbers[i] > 0) {
			arr[i] -= 1;
			this.setState({numbers: arr});
		}
	}

	getHighest() {
		return this.state.numbers.reduce((prev, curr) => {
			return prev > curr ? prev : curr;
		});
	}

  render() {
  	return (
  		<div>
  			{
  				this.props.count.map((el, i) => {
  					return (
  						<Counter 
  							key={i} i={i} 
  							value={this.state.numbers[i]} 
  							handleIncrement={this.handleIncrement} 
  							handleDecrement={this.handleDecrement} 
  							highest={this.getHighest() === this.state.numbers[i]}
  						/>
  					)
  				})
  			}
  		</div>
  	);
  }
}

export default Max;
