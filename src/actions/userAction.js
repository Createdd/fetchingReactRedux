import axios from 'axios';
import * as types from './actionTypes';

export function loadUser(user) {
	return {
		type: types.LOAD_USER_SUCCESS,
		user
	};
}

// export function loadUser() {
// 	return function(dispatch) {
// 		return axios
// 			.get(`https://api.github.com/users/${user}/repos`)
// 			.then(repos => {
// 				dispatch(loadUserSuccess(repos.data));
// 				console.warn(repos.data);
// 			})
// 			.catch(err => {
// 				throw err;
// 			});
// 	};
// }
