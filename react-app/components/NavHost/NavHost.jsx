import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './NavHost.css';
import localise from '../../localisation/localisation';
import appState from '../../state/app';

export default class NavHost extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={ styles.NavHost }>
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						Host <span className="caret"></span></a>
						<ul className="dropdown-menu">
							<li><Link to="/host">Home</Link></li>
							<li><Link to="/host/guest-list">Guest List</Link></li>
							<li><Link to="/host/logout">Logout</Link></li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}