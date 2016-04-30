import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Where extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<Link className="btn btn-lg btn-primary pull-right" to="/who">
					{ localise('nav_who') }
				</Link>
				<h2>{ localise('nav_where') }</h2>
			</div>
		</div>
    );
  }
}
