import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import List from './state-challenges/List';
import Clicked from './state-challenges/Clicked';
import Buttons from './lifting/Buttons';
import Adder from './state-challenges/Adder';
import Square from './first-components/Square';
import StepCounter from './state-challenges/StepCounter';
import CatchMeIfYouCan from './state-challenges/CatchMeIfYouCan';
import LameGame from './state-challenges/LameGame';
import ToggleText from './state-challenges/ToggleText';
import Nav from './router/Nav';
import FourOhFour from './router/FourOhFour'

class App extends Component {
  render() {
    return (
    	<Router>
    		<div>
    			<Nav />
    			<Switch>
		    		<Route path="/buttons" component={ Buttons } />
		    		<Route path="/list" component={ List } />
		    		<Route path="/clicked" component={ Clicked } />
		    		<Route path="/adder" component={ Adder } />
		    		<Route path="/toggle-text" render={ () => (<ToggleText initial="Hello" alternate="World" />)} />
		    		<Route path="/catch" render={ () => (<CatchMeIfYouCan jump="100" />)} />
		    		<Route path="/lame/:aim" render={ ({match}) => (<LameGame aim={match.params.aim} />)} />
		    		<Route path="/square/:color" 
		    					 render={ ({match}) => (<Square color={match.params.color}/>)} />

		    		<Route path="/step-counter/:max/:step" 
		    					 render={ ({match}) => (<StepCounter max={match.params.max} step={match.params.step} />)} />
		    		<FourOhFour />
	    		</Switch>
    		</div>
    	</Router>
    );
  }
}

export default App;

