import { combineReducers } from 'redux';

import repos from './reposReducer';

const rootReducer = combineReducers({
	repos
});

export default rootReducer;
