import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import { loadRepos } from './actions/reposAction';

const store = configureStore();
store.dispatch(loadRepos());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
