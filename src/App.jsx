import React, { Component } from 'react';
import './App.css';

import Die from './state-challenges/Die';

class App extends Component {
  render() {
    return (
    	<div>
    		<Die />
    	</div>
    );
  }
}

export default App;

// <Clicked />
// <Square color="blue" />
// <ToggleText initial="Hello" alternate="World" />
// <Counter max="100" />
// <StepCounter max="100" step="5" />
// <CatchMeIfYouCan jump="100" />
// <LameGame aim={3} />
// <Colours colours={colours} />


// import Clicked from './state-challenges/Clicked';
// import Square from './first-components/Square';
// import ToggleText from './state-challenges/ToggleText';
// import Counter from './state-challenges/Counter';
// import StepCounter from './state-challenges/StepCounter';
// import CatchMeIfYouCan from './state-challenges/CatchMeIfYouCan';
// import LameGame from './state-challenges/LameGame';
// import Colours from './state-challenges/Colours';
