import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

class App extends Component {
	render() {
		return (
	      <div>
	        I am content
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
