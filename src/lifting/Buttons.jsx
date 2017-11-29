import React, { Component } from 'react';
import Button from './Button';


class Buttons extends Component {

	constructor(props) {
		super(props);
		this.state = {
			number: 0,		
		}

		this.update = this.update.bind(this);
	}

	update(i) {
		this.setState({number: i});
	}

  render() {

  	let btnArr = ['First', 'Second', 'Third', 'Fourth']

    return (
    	<div>
    		{
    			btnArr.map((el, i) => {
	    			return (<Button 
	    				key={i}
	    				onClick={(i) => {this.update(i)}} 
	    				selected={this.state.number === i} 
	    				value={el} 
	    				index={i}
	    			/>)
    			})
    		}
	    </div>
    );
  }
}

export default Buttons;
