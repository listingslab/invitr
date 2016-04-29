import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './NavLogin.css';
import localise from '../../localisation/localisation';
import appState from '../../state/app';

export default class NavLogin extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={ styles.NavLogin }>
				<form className="navbar-form navbar-right">
					<div className="form-group">
						<input type="password" placeholder={ localise('nav_password') } className="form-control" />
					</div>
					<button type="submit" className="btn btn-default">{ localise('nav_go') }</button>
				</form>
			</div>
		);
	}
}