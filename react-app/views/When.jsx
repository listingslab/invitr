import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class When extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<h1>{ localise('nav_when') }</h1>
				<p className="lead">Sat 13th August</p>
				<p>Which is in xxx hours/mins time</p>
				<p>
					<Link className="btn btn-lg btn-primary" to="/where">
						{ localise('nav_where') }
					</Link>
				</p>
			</div>
		</div>
    );
  }
}
