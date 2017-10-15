import React from 'react';
import './style.css';

import Wrapper from 'components/Wrapper';
import PinkSquare from 'components/PinkSquare';
import WhiteSquare from 'components/WhiteSquare';

class Layout extends React.Component{
	render(){
		return (
			<Wrapper>
				<PinkSquare></PinkSquare>
				<WhiteSquare></WhiteSquare>
			</Wrapper>
		);
	}
}

export default Layout;
