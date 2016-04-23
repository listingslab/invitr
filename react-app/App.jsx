import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

class App extends Component {

	constructor() {
		super();
		let apiURL = '/api/';
		if (window.location.port === '1968') {
			apiURL = 'http://localhost:1975/api';
		}
		this.state = {
			apiURL: apiURL
		};
	}

	render() {
		return (
	      <div>
	        <h2>I. Am. Content</h2>
	        <p>
	        apiURL: <a
	        	href={ this.state.apiURL }
	        	target="_blank"
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
