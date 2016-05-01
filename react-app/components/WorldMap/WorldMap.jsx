import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './WorldMap.css';
import localise from '../../localisation/localisation';
import appState from '../../state/app';

export default class WorldMap extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={ styles.WorldMap }>
				WorldMap
			</div>
		);
	}
}