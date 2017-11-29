import React, { Component } from 'react';
import './App.css';
import Form from './lifting/Form';

let fields = ["First Name", "Last Name", "Email"];

class App extends Component {
  render() {
    return (
    	<div className="container">
    	 	<Form fields={ fields } />
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
// <Colours colours={colours} />
// <LameGame aim={3} />
// <List />  
// <Adder />  
// <TempConverter />   
// <Buttons />





// import Clicked from './state-challenges/Clicked';
// import Square from './first-components/Square';
// import ToggleText from './state-challenges/ToggleText';
// import Counter from './state-challenges/Counter';
// import StepCounter from './state-challenges/StepCounter';
// import CatchMeIfYouCan from './state-challenges/CatchMeIfYouCan';
// import LameGame from './state-challenges/LameGame';
// import Colours from './state-challenges/Colours';
// import Length from './state-challenges/Length';
// import List from './state-challenges/List';
// import Adder from './state-challenges/Adder';
// import TempConverter from './state-challenges/TempConverter';
// import Buttons from './lifting/Buttons';
