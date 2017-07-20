import axios from 'axios';
import * as types from './actionTypes';

export function loadReposSuccess(repos) {
	return {
		type: types.LOAD_REPOS_SUCCESS,
		repos
	};
}

export function loadRepos(user) {
	return function(dispatch) {
		return axios
			.get(`https://api.github.com/users/${user}/repos`)
			.then(repos => {
				dispatch(loadReposSuccess(repos.data));
			})
			.catch(err => {
				throw err;
			});
	};
}
