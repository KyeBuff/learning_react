import React, { Component } from 'react';
import Input from './Input.jsx';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fields: [
				{
					label: props.fields[0],
					value: '',
					valid: true,
				},
				{
					label: props.fields[1],
					value: '',
					valid: true,
				},
				{
					label: props.fields[2],
					value: '',
					valid: true,
				},
			],

		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e, i) {
		const arr = this.state.fields.slice();

		arr[i].value = e.target.value;

		this.setState({fields: arr});
	}

	onSubmit(e) {
		e.preventDefault();

		let arr = this.state.fields.slice();

		arr.map((ob) => {
			return !ob.value ? ob.valid = false : ob.valid = true;
		});

		this.setState({fields: arr});

	}

  render() {
  	return (
  		<form onSubmit={this.onSubmit}>
  			{
  				this.props.fields.map((el, i) => {
		  			return <Input 
		  								key={i} 
		  								label={el} 
		  								index={i} 
		  								value={this.state.fields[i].value} 
		  								onChange={this.onChange}
		  								valid={this.state.fields[i].valid}
		  							/>
  				})
  			}
  			<input type="submit" />
  		</form>
  	);
  }
}

export default Form;
