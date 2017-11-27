import React, { Component } from 'react';
import './App.css';
import Stuff from './first-components/Stuff';
import FadeIn from './first-components/FadeIn';

class App extends Component {
  render() {
    return (
			<FadeIn time="1000ms">
				<Stuff />
			</FadeIn>
    );
  }
}

export default App;
