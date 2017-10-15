import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

class PinkSquare extends React.Component{
	constructor(props){
		super(props);
		this.state = {width : 0};
	}
	componentDidMount(){
		let container = this.refs.container;
		//Initially set width
		this.updateWidth(container.clientHeight);
		//Update on resize
		window.addEventListener("resize",(evt) => {
			this.updateWidth(container.clientHeight);	
		});
	}
	updateWidth(width){
		this.setState({width:width});
	}
	render(){
		return (
			<div className="block-pink" ref="container" style={{width: this.state.width}}>
				<div className="block-pink__yellow-box"></div>
			</div>
		);
	}
}

const WhiteSquare = () => (
	<div className="block-white"></div>
)

const cols = [...Array(12).keys()];
class Layout extends React.Component{
	render(){
		return (
			<Container fluid className="layout-container__wrapper">
				<div className="layout-container__main">
					<PinkSquare></PinkSquare>
					<WhiteSquare></WhiteSquare>
					<div className="layout-container__grid">
						<Container fluid>
							<Row>
								{cols.map((index) => {
									return (
										<Col className="layout-col">
										</Col>
									);
								})}
							</Row>
						</Container>
					</div>
				</div>
			</Container>
		);
	}
}

export default Layout;
