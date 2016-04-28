import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './Nav.css';
import appState from '../../state/app';
import localise from '../../localisation/localisation';
import LocaleFlags from '../LocaleFlags/LocaleFlags';
import NavLogin from '../NavLogin/NavLogin';
import NavHost from '../NavHost/NavHost';
import NavGuest from '../NavGuest/NavGuest';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			help: 'help'
		}
	}

	render() {
		return (
			<div className={ styles.Nav }>
				<nav className="navbar navbar-default navbar-static-top">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							</button>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
 							<LocaleFlags flagClick={ this.props.localeChanger }/>
 							<NavGuest />
							{
								appState.loggedIn ? <NavHost /> : <NavLogin />
							}
						</div>
					</div>
				</nav>
			</div>
		);
	}
}