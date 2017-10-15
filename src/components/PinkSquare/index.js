import React from 'react';
import './style.css';

class PinkSquare extends React.Component{
	constructor(props){
		super(props);
		this.state = {width : 0, windowWidth: window.innerWidth};
	}
	componentDidMount(){
		let container = this.refs.container;
		//Initially set width
		this.updateWidth(container.clientHeight);
		console.log("Element has mounted");
		//Update on resize
		window.addEventListener("resize",(evt) => {
			console.log(this.state.windowWidth, window.innerWidth);
			if(this.state.windowWidth !== window.innerWidth){
				console.log("Re-rendering");
				this.updateWidth(container.clientHeight);	
			}
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


export default PinkSquare;