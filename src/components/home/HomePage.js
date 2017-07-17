import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as reposActions from '../../actions/reposAction';

class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	repoRow(repo, index) {
		return (
			<div key={index}>
				{repo.name}
			</div>
		);
	}

	render() {
		return (
			<div className="container">
				<h1>I want to fetch something!</h1>
				{this.props.repos.map(this.repoRow)}
			</div>
		);
	}
}

HomePage.propTypes = {
	repos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		repos: state.repos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(reposActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
