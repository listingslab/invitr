import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './Debugger.css';

export default class Debugger extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (

			<debugger className={ styles.Debugger }>
				<div className="container">
					Debugger
				</div>
			</debugger>
		);
	}
}
