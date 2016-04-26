import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class What extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<h1>{ localise('nav_what') }</h1>
				<p className="lead">We're getting married</p>
				<p>In a fun ceremony by Dorinda. Because if you haven't been 
				married by Dorinda, you haven't been married!</p>
				<p>
					<Link className="btn btn-lg btn-primary" to="/when">
						{ localise('nav_when') }
					</Link>
				</p>
			</div>
		</div>
    );
  }
}
