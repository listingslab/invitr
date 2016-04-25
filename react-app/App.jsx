import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import appState from './state/app';
import styles from './App.css';
import Navigation from './components/Navigation/Navigation';
import LocaleFlags from './components/LocaleFlags/LocaleFlags';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			apiUrl: appState.apiUrl
		};
	}

	render() {
		console.log('Render App');
		return (
	      <app className={ styles.App }>
	      	<LocaleFlags />
	      	<Navigation />
	      </app>
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
