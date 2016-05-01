import React from 'react';
import localise from '../../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import WorldMap from '../../components/WorldMap/WorldMap';

export default class Where extends React.Component {

  render() {
    return(
    	<div>
			<h1 className="cover-heading">{ localise('nav_where') }</h1>
			<WorldMap />
		</div>
    );
  }
}
