import React, { Component } from 'react';

class CatchMeIfYouCan extends Component {

	constructor(props) {
		super(props);
		this.state = {
			playing: false,
			startTime: null,
			nowTime: null,
			result: false,
		}

		this.handleStart = this.handleStart.bind(this);
		this.handleNow = this.handleNow.bind(this);
	}

	handleStart() {

		const currMs = Date.now();

		this.setState(
			{
				playing: true,
				startTime: currMs,
			}
		);
	}

	handleNow() {

		const currMs = Date.now();

			this.setState(
				{
					nowTime: currMs,
					playing: false,
					result: true,
				}
			);

	}

	render() {
		return (
			<div>
				{!this.state.playing ? (<button onClick={this.handleStart}>Start</button>) : null}

				{this.state.playing ? (<button onClick={this.handleNow}>Now</button>) : null}

				<p>{this.state.playing ? this.props.aim + ' seconds.' : 'Click start to play.'}</p>

				{ this.state.result ? 
				(<p>Result: {((this.state.nowTime - this.state.startTime) / 1000).toFixed(1)}</p>) : null
				}
			</div>
		);
	}
}

export default CatchMeIfYouCan;
