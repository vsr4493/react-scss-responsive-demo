import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

const cols = [...Array(12).keys()];//Array.from(Array(10).keys);
console.log(Array(12).keys());
const Layout = () => (
	<Container fluid className="layout-container">
		<Row>
			{cols.map((index) => {
				console.log(index);
				return (<Col className="layout-col"></Col>);
			})}
		</Row>
	</Container>
);

export default Layout;
