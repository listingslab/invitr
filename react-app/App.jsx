import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import appState from './state/app';
import styles from './App.css';
import Navigation from './components/Navigation/Navigation';
import LocaleFlags from './components/LocaleFlags/LocaleFlags';

import Who from './views/Who';
import What from './views/What';
import When from './views/When';
import Where from './views/Where';

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
	      	{ React.cloneElement(this.props.children, {
				key: this.props.location.pathname
	      	}) }

	      </app>
	    );
	}
}

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
    	<IndexRoute component={ Who }/>
    	<Route path="who" component={ Who } />
    	<Route path="what" component={ What } />
    	<Route path="when" component={ When } />
    	<Route path="where" component={ Where } />
    </Route>
  </Router>
), document.getElementById('react-app'));
