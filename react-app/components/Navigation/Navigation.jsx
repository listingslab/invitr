import React from 'react';
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
				<h1>NAVIGATION</h1>
				<ul>
					<li><a href="#">{ localise ('nav_who') }</a></li>
					<li><a href="#">{ localise ('nav_what') }</a></li>
					<li><a href="#">{ localise ('nav_when') }</a></li>
					<li><a href="#">{ localise ('nav_where') }</a></li>
					<li><a href="#">{ localise ('nav_how') }</a></li>
				</ul>
			</nav>
		);
	}
}
