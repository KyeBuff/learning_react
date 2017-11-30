import React, { Component } from 'react';
import NumButton from './NumButton.jsx';
import OpButton from './OpButton.jsx';

class Calculator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			outputArr: [],
			currVal: '',
			currOp: null,
			total: 0,
			// Index allows us to target previous object to track value of operation
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

		const arr = this.state.outputArr.slice();

		let numOb = {
			//if outputArr is empty, just assign the curret number to value
			value: !arr.length ?
								 +this.state.currVal 
						  	: 
						  	//if there is an value value in the prev ob
						  	//pass previous value value
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
		this.setState(
			{
				outputArr: arr, 
				currVal: '', 
				currOp: op, 
				opClicked: true, 
				index: this.state.index + 1
			}
		);

	}

	calculate(numOb, currVal) {

		//take ob and currVal

		//value value passed to total
		let total = numOb.value;

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

		const finalOb = {
			value: +this.state.currVal,
		}

		//calculate again using tracked value in latest ob and currVal
		this.setState(
			{
				total: this.calculate(this.state.outputArr[this.state.index], +this.state.currVal
					)
			}
		);

	}

  render() {
  	const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  	const operators = ['+', '-', 'X', '/'];
  	const memoryBtns = ['M+', 'MC', 'MRC']
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
	  		<p>Value: {this.state.currVal}</p>
	  		<p>Operator: {this.state.currOp}</p>
	  		<p>Total: {this.state.total}</p>
  		</div>
  	);
  }
}

export default Calculator;
