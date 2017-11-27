import React from 'react';

import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = (props) => (
	<div>
	  <Header>Super amazing cats</Header>
	  <Paragraph>Some sample text to display in the paragraph.</Paragraph>
	  {props.square ? (<Square color="blue" />) : null}
	  <People names={['Kye', 'Paul', 'Liz', 'Jonny']}/>
	</div>
);

Stuff.defaultProps = {
	square: true,
}

export default Stuff;
