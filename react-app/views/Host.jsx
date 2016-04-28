import React from 'react';
import localise from '../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Host extends React.Component {

  render() {
    return(
    	<div className="container">
			<h1>Welcome, Host</h1>
		</div>
    );
  }
}
