import React from 'react';
import localise from '../../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class What extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			content: null
		};
	}

	render() {
		return(
			<div>
				<h1 className="cover-heading">{ localise('nav_what') }</h1>
			</div>
		);
	}
}
