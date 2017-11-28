import React, { Component } from 'react';

class ToggleText extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'initial',
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {

		const text = this.state.text === 'initial' ? 'alternate' : 'initial';

		this.setState({text: text});
	}

	render() {
		return (
			<div>
				<p>{this.state.text}</p>
				<button onClick={this.handleClick}>Toggle</button>
			</div>
		);
	}
}

export default ToggleText;
