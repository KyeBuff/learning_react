import React, { Component } from 'react';
import '../Lame.css';

class CatchMeIfYouCan extends Component {

	constructor(props) {
		super(props);
		this.state = {
			startTime: null,
			nowTime: null,
		}

		this.handleStart = this.handleStart.bind(this);
		this.handleNow = this.handleNow.bind(this);
	}

	handleStart() {

		const currMs = Date.now();

		this.setState(
			{
				startTime: currMs,
			}
		);
	}

	handleNow() {

		const currMs = Date.now();

			this.setState(
				{
					nowTime: currMs,
				}
			);

	}

	render() {
		let {aim} = this.props;
		let {startTime, nowTime} = this.state;

		return (
			<div className="lame-app">
				{!startTime ? (<button className="btn btn-primary" onClick={this.handleStart}>Start</button>) : null}

				{startTime && !nowTime ? (<button className="btn btn-danger" onClick={this.handleNow}>Now</button>) : null}

				<p>
					{
						startTime && !nowTime ? 'Target is ' + aim + ' seconds.' : null
					}
				</p>

				{ nowTime ? 
						(<p>Result: {' '} 
				{
					//Aim minus the difference between the time start was clicked and the time now was clicked
					(aim - ((nowTime - startTime) / 1000)).toFixed(1)} seconds {}</p>
					) : null
				}
			</div>
		);
	}
}

export default CatchMeIfYouCan;
