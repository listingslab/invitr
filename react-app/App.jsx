import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

class App extends Component {

	constructor() {
		super();
		let apiURL = '/api/setup';
		if (window.location.port === '1968') {
			apiURL = 'http://localhost:1975/api/setup';
		}
		this.state = {
			apiURL: apiURL
		};
	}

	render() {
		return (
	      <div>
	      	<h2>Invitr</h2>
	        <h3>I. Am. Content</h3>
	        <p>
	        <a
	        	href={ this.state.apiURL }
	        >{ this.state.apiURL }</a>
	        </p>
	      </div>
	    );
	}
}

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
    	the other place
    </Route>
  </Router>
), document.getElementById('react-app'));
