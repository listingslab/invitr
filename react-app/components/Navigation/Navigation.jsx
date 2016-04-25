import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './Navigation.css';
import appState from '../../state/app';
import localise from '../../localisation/localisation';

export default class Navigation extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className={ styles.Navigation }>
				<ul>
					<li><Link to="/who">{ localise('nav_who') }</Link></li>
					<li><Link to="/what">{ localise('nav_what') }</Link></li>
					<li><Link to="/when">{ localise('nav_when') }</Link></li>
					<li><Link to="/where">{ localise('nav_where') }</Link></li>
				</ul>
			</nav>
		);
	}
}
