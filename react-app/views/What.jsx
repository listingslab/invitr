import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class What extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<Link className="btn btn-lg btn-primary pull-right" to="/when">
					{ localise('nav_when') }
				</Link>
				<h2>{ localise('nav_what') }</h2>
			</div>
		</div>
    );
  }
}
