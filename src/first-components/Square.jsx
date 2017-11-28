import React, { Component } from 'react';

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isBorderBlack: true,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ isBorderBlack: !this.state.isBorderBlack});
	}

	render() {
		return (
			<div 
				onClick={this.handleClick}
				style={
					{
						backgroundColor: this.props.color, 
						height: this.props.divHeight, 
						width: this.props.divWidth, 
						borderWidth: '5px',
						borderStyle:  'solid',
						borderColor: this.state.isBorderBlack ? this.props.color : 'Black',
					}
				}
				></div>	
		)
	}
}

Square.defaultProps = {
	color: 'red',
	divHeight: '200px',
	divWidth: '200px',
	borderColor: 'Black',
}

export default Square;
