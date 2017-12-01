import React, { Component } from 'react';
import NumButton from './NumButton';
import OpButton from './OpButton';
import MemButton from './MemButton';
import calcConfig from './calc-config/config.js';

// Problem is the last item in the array is not taking the calcualted value when using memory
//curr val is set to the memory value

class Calculator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			outputArr: [],
			currVal: '',
			currOp: null,
			total: 0,
			// Index allows us to target previous object in outputArr to operate on previous value
			index: -1,
			memory: {
				value: null,
			},
		}
		this.numOnClick = this.numOnClick.bind(this);
		this.onOpClick = this.onOpClick.bind(this);
		this.equals = this.equals.bind(this);
		this.addToMemory = this.addToMemory.bind(this);
		this.clearMemory = this.clearMemory.bind(this);
		this.recallMemory = this.recallMemory.bind(this);
	}

	numOnClick(n) {
		// Build up currVal as string 
		//Set op clicked to false to allow operation click
		this.setState({currVal: this.state.currVal + n, currOp: false, currOp: null,});
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
		if(!this.state.currOp) {
			arr.push(numOb);
		}

		//set currOp to true so that we can't use multiple ops
		//Increase index state so we are always tracking the previous ob in arr
		this.setState(
			{
				outputArr: arr, 
				currVal: '', 
				currOp: op, 
				index: this.state.index + 1
			}
		);

	}

	calculate(numOb, currVal) {

		//default object create to prevent memory undefined error
		if(!numOb) {
			numOb = {};
			numOb.value = 0;
			numOb.op = '+';
		}

		//take ob and currVal

		return calcConfig.operatorMap[numOb.op](numOb, currVal);

	}

	equals() {

		// const arr = this.state.outputArr.slice();
		// const finalOb = {
		// 	value: +this.state.currVal,
		// }

		// arr.push(finalOb);

		//calculate again using tracked value in latest ob and currVal
		this.setState(
			{
				total: this.calculate(this.state.outputArr[this.state.index], +this.state.currVal
					),
				// outputArr: arr,
			}
		);

	}

	addToMemory() {
		this.setState(
			{
				memory: {
					value: this.calculate(this.state.outputArr[this.state.index], +this.state.currVal
					),
				}
			}
		);
	}

	clearMemory() {
		this.setState({
			memory: {
				value: null,
			}
		});
	}

	recallMemory() {

		const arr = this.state.outputArr.slice();

		let numOb = {
			//if outputArr is empty, just assign the curret number to value
			value: this.state.memory.value,
			op: this.state.currOp,
		}

		//push object to array
		arr.push(numOb);

		this.setState({outputArr: arr, currVal: numOb.value})
	}

  render() {
  	const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  	const operators = ['+', '-', 'X', '/'];
  	const memoryBtns = ['M+', 'MC', 'MRC']
  	return (
  		<div>
  			<div>
	  			{
	  				memoryBtns.map((el, i) => {
	  					if(el === 'M+') {
	  						return (<MemButton key={i} onClick={this.addToMemory} value={el}/>);
	  					}
	  					if(el === 'MC') {
	  						return (<MemButton key={i} onClick={this.clearMemory} value={el}/>);
	  					}
	  					if(el === 'MRC') {
	  						return (<MemButton key={i} onClick={this.recallMemory} value={el}/>);
	  					}
	  					return null;
	  				})
	  			}
	  		</div>
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
