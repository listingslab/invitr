import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './NavGuest.css';
import localise from '../../localisation/localisation';
import appState from '../../state/app';

export default class NavGuest extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={ styles.NavGuest }>
				<ul className="nav navbar-nav">
					<li><Link to="/who">{ localise('nav_who') }</Link></li>
					<li><Link to="/what">{ localise('nav_what') }</Link></li>
					<li><Link to="/when">{ localise('nav_when') }</Link></li>
					<li><Link to="/where">{ localise('nav_where') }</Link></li>
				</ul>
			</div>
		);
	}
}