import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<ul className="left active">
				<li>
					<IndexLink to="/">
						<i className="fa fa-home material-icons" aria-hidden="true" />
					</IndexLink>
				</li>
				<li>
					<Link to="/about">
						<i
							className="fa fa-info-circle material-icons"
							aria-hidden="true"
						/>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
