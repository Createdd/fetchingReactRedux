import * as types from './actionTypes';

export function loadUser(user) {
	return {
		type: types.LOAD_USER_SUCCESS,
		user
	};
}

