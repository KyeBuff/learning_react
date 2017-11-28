import React, { Component } from 'react';

class Colours extends Component {

	constructor(props) {
		super(props);
		this.state = {
			index: 0,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if(this.state.index < this.props.colours.length-1) {
			this.setState({index: this.state.index + 1})
		} else {
			this.setState({index: 0});
		}
	}

	render() {
		return (
			<div onClick={this.handleClick} style={
				{
					height: '200px',
					width: '200px',
					backgroundColor: this.props.colours[this.state.index],
				}
			}
			>
				
			</div>
		);
	}
}

export default Colours;
