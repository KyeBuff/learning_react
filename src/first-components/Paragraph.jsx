import React from 'react';

const Paragraph = ({children, props}) => (
	<p>{children}</p>
);

Paragraph.defaultProps = {
	message: 'Default message',
}

export default Paragraph;
	