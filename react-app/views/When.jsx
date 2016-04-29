import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class When extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<h2>{ localise('nav_when') }</h2>
				<Link className="btn btn-lg btn-primary" to="/where">
					{ localise('nav_where') }
				</Link>
			</div>
		</div>
    );
  }
}
