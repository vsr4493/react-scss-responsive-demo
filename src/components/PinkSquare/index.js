import React from 'react';
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
		/*window.addEventListener("resize",(evt) => {
			this.updateWidth(container.clientHeight);	
		});*/
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


export default PinkSquare;