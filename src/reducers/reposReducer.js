import * as types from '../actions/actionTypes';

export default function reposReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_REPOS_SUCCESS: {
			return action.repos;
		}
		default:
			return state;
	}
}
