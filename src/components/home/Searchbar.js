import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ user, onChange, onSave }) => {
	return (
		<div className="container">
			<form onSubmit={onSave}>
				<div className="input-field">
					<i className="fa fa-search material-icons prefix red-text text-darken-4" aria-hidden="true" />
					<input id="icon_prefix" type="text" className="validate" placeholder="Github username" value={user} onChange={onChange} />
				</div>
			</form>
		</div>
	);
};

Searchbar.propTypes = {
	user: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default Searchbar;
