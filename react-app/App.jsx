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
		this.setState({
			locale: appState.locale
		});
	}

	changeLocale(flag) {
		appState.locale = flag.target.id;
		this.setState( {
			locale: appState.locale
		});
	}

	render() {
		return (
	      <app className={ styles.App }>
	      	<LocaleFlags flagClick={ this.changeLocale.bind(this) }/>
	      	<Navigation />
	      </app>
	    );
	}
}

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
    	Router
    </Route>
  </Router>
), document.getElementById('react-app'));
