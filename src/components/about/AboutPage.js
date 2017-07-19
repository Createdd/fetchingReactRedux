import React, { Component } from 'react';

class AboutPage extends Component {
	render() {
		return (
			<div className="container">
				<h1>What this project is about</h1>
				<p>
					I was building this application to improve my knowledge on
					React'n'Redux :)
				</p>
				<p>We should now easily be able to search for repos on Github.</p>
				<img className="responsive-img" src="../../create.jpeg" />
			</div>
		);
	}
}

export default AboutPage;
