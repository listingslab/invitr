import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './Footer.css';
import appState from '../../state/app';
import localise from '../../localisation/localisation';

export default class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className={ styles.Footer }>
				<div className="container">
					<p className="text-muted">@listingslab</p>
				</div>
			</footer>
		);
	}
}	