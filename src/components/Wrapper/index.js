import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

const cols = [...Array(12).keys()];
const Wrapper = ({children}) => (
	<Container fluid className="layout__wrapper">
		{children}
		<div className="layout__grid">
			<Container fluid>
				<Row>
					{cols.map((index) => {
						return (
							<Col key={index}></Col>
						);
					})}
				</Row>
			</Container>
		</div>
	</Container>
);

export default Wrapper;