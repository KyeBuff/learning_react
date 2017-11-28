import React, { Component } from 'react';

class CatchMeIfYouCan extends Component {

	constructor(props) {
		super(props);
		this.state = {
			yPosition: 0,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({yPosition: this.state.yPosition + +this.props.jump});
	}

	render() {
		return (
			<button 
				style={
					{
						position: 'relative',
						top: this.state.yPosition,
					}
				} 
				onClick={this.handleClick}>Jump</button>
		);
	}
}

export default CatchMeIfYouCan;
