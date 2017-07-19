import { combineReducers } from 'redux';

import repos from './reposReducer';
import user from './userReducer';

const rootReducer = combineReducers({
	repos,
	user
});

export default rootReducer;
