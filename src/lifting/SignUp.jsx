import React, { Component } from 'react';
import Password from './Password.jsx';

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			passwords: [
				{password: ''},
				{password: ''},
			],
			match: false,
		}
		this.update = this.update.bind(this);
		this.validate = this.validate.bind(this);

	}

	update(e, i) {
		const arr = this.state.passwords.slice();

		arr[i].password = e.target.value;

		this.setState({passwords: arr});

		this.validate();

	}

	validate() {

		if(this.state.passwords[0].password === this.state.passwords[1].password && this.state.passwords[0].password.length >= 12 ) {
			this.setState({match: true})
		} else {
			this.setState({match: false})
		}
	}

  render() {
  	return (
  		<form>
  			<Password 
  				label="Password" i={0}
  				value={this.state.passwords[0].password} 
  				onChange={(e, i) => {
	  					this.update(e, i);
	  				}
  				} 
  				match={this.state.match}
  			/>
  			<Password 
  				label="Confirm password" i={1} 
  				value={this.state.passwords[1].password} 
  				onChange={(e, i) => {
	  					this.update(e, i);
	  				}
  				}  
  				match={this.state.match}
  			/>
  		</form>
  	);
  }
}







export default SignUp;
