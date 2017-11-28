import React, { Component } from 'react';
import './App.css';
import Clicked from './state-challenges/Clicked';
import Square from './first-components/Square';
import ToggleText from './state-challenges/ToggleText';

class App extends Component {
  render() {
    return (
    	<div>
    		<Clicked />
    		<Square color="blue" />
    	</div>
    );
  }
}

export default App;
