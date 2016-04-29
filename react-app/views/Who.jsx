import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Who extends React.Component {
	
  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<h2>{ localise('nav_who') }</h2>
				<Link className="btn btn-lg btn-primary" to="/what">
					{ localise('nav_what') }
				</Link>
			</div>
		</div>
    );
  }
}
