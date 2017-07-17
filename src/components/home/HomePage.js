import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
	render() {
		return (
			<div className="container">
				<h1>I want to fetch something!</h1>
				<Link to="about">Learn more in "about"</Link>
			</div>
		);
	}
}

export default HomePage;
