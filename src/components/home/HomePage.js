import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userAction';
import Repo from './Repo';
import Searchbar from './Searchbar';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
		this.updateSearch = this.updateSearch.bind(this);
		this.saveSearch = this.saveSearch.bind(this);
	}

	updateSearch(e) {
		let user = e.target.value;
		return this.setState({ user: user });
	}

	saveSearch(e) {
		e.preventDefault();
		this.props.actions.loadUser(this.state.user);
	}

	repoRow(repo, index) {
		return (
			<div key={index}>
				<Repo key={repo.id} repo={repo} />
			</div>
		);
	}

	render() {
		return (
			<div className="container">
				<Searchbar
					user={this.state.user}
					onChange={this.updateSearch}
					onSave={this.saveSearch}
				/>
				{this.props.repos.map(this.repoRow)}
			</div>
		);
	}
}

HomePage.propTypes = {
	repos: PropTypes.array.isRequired,
	user: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		repos: state.repos,
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
