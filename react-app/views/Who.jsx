import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Who extends React.Component {
	
  render() {
    return(
    	<div className="container">
			<div className="jumbotron">
				<h1>{ localise('nav_who') }</h1>
				<p className="lead">Danni Bament &amp; Chris Dorward</p>
				<p>With special guest stars, Monkey Fred &amp; Dorinda</p>
				<p>Also... Joshua, Ben, Oliver, Milly, Karen, Caroline, Gisela
				Stewart, Aidan, Christoph, Jeff, Sue, Jason, Adam, Michelle</p>
				<p>
					<Link className="btn btn-lg btn-primary" to="/what">
						{ localise('nav_what') }
					</Link>
				</p>
			</div>
		</div>
    );
  }
}
