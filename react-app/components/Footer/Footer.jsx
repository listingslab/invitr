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
			<div className={ styles.Footer }>
				<div className="mastfoot">
					<div className="inner">
						<p>by <a href="http://listingslab.com" target="_blank">@listingslab</a>.</p>
					</div>
				</div>
			</div>
		);
	}
}
