import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Who extends React.Component {
	
  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<Link className="btn btn-lg btn-primary pull-right" to="/what">
					{ localise('nav_what') }
				</Link>
				<h2>{ localise('nav_who') }</h2>
			</div>
		</div>
    );
  }
}
