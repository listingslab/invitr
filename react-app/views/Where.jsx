import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Where extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<h1>{ localise('nav_where') }</h1>
				<p className="lead">Adelaide Zoo!</p>
				<p>And then onto somewhere nice for the reception &amp; dancin'</p>
				<p>
					<Link className="btn btn-lg btn-primary" to="/who">
						{ localise('nav_who') }
					</Link>
				</p>
			</div>
		</div>
    );
  }
}
