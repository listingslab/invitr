import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class NoMatch extends React.Component {

  render() {
    return(
    	<div className="container">
			<h1>No match found for that route.</h1>
		</div>
    );
  }
}
