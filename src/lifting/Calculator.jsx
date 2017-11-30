import React, { Component } from 'react';
import NumButton from './NumButton.jsx';
import OpButton from './OpButton.jsx';

class Calculator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			output: [],
			currVal: '',
			total: 0,
			// Index allows us to target previous object to track initial/next value of operation
			index: -1,
		}
		this.numOnClick = this.numOnClick.bind(this);
		this.onOpClick = this.onOpClick.bind(this);
		this.equals = this.equals.bind(this);
	}

	numOnClick(n) {
		// Build up currVal as string 
		//Set op clicked to false to allow operation click
		this.setState({currVal: this.state.currVal + n, opClicked: false});
	}

	onOpClick(op) {

		const arr = this.state.output.slice();

		let numOb = {
			//if output is empty, just assign the curret number to initial
			initial: !arr.length ?
								 +this.state.currVal 
						  	: 
						  	//if there is an initial value in the prev ob
						  	//pass previous initial value
						  	//pass currVal  
							  this.calculate(arr[this.state.index], +this.state.currVal),
			op: op,
		}

		//push object to array
		if(!this.state.opClicked) {
			arr.push(numOb);
		}

		//set opClicked to true so that we can't use multiple ops
		//Increase index state so we are always tracking the previous ob in arr
		this.setState({output: arr, currVal: '', opClicked: true, index: this.state.index + 1});

	}

	calculate(numOb, currVal) {

		//take ob and currVal

		//initial value passed to total
		let total = numOb.initial;

		//use numOb operator on currVal in switch
		switch(numOb.op) {
			case '+': 
				total += currVal;
				break;
			case '-': 
				total -= currVal;
				break;
			case 'X': 
				total *= currVal;
				break;
			case '/': 
				total /= currVal;
				break;
		}	

		return total;	

	}

	equals() {

		//calculate again using tracked value in latest ob and currVal
		this.setState({total: this.calculate(this.state.output[this.state.index], +this.state.currVal)});

	}

  render() {
  	const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  	const operators = ['+', '-', 'X', '/'];
  	return (
  		<div>
	  		<div>
	  			{
	  				numButtons.map((el, i) => {
	  					return (<NumButton key={i} onClick={this.numOnClick} value={el}/>);
	  				})
	  			}
	  		</div>
	  		<div>
	  			{
	  				operators.map((el, i) => {
	  					return (<OpButton key={i} onClick={this.onOpClick} value={el}/>);
	  				})
	  			}
	  			<button className='btn btn-success' onClick={this.equals}>=</button> 
	  		</div>
	  		<p>{this.state.currVal || 0}</p>
	  		<p>{this.state.total}</p>
  		</div>
  	);
  }
}

export default Calculator;
