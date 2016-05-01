import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import appState from './state/app';
import localise from './localisation/localisation';
import styles from './App.css';
import Navigation from './components/Nav/Nav';
import Debugger from './components/Debugger/Debugger';
import Footer from './components/Footer/Footer';

import Who from './views/Who';
import What from './views/What';
import When from './views/When';
import Where from './views/Where';
import Host from './views/Host';
import NoMatch from './views/NoMatch';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			locale: appState.locale
		};
	}

	changeLocale(flag) {
		appState.locale = flag.target.id;
		this.setState( {
			locale: appState.locale
		});
	}

	render() {
		return (
			<div className={ styles.App }>
				
		    </div>
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
    	<Route path="host" component={ Host } >
    		<IndexRoute component={ Host }/>
    		<Route path="guest-list" component={ Host } />
    	</Route>
    	<Route path="*" component={ NoMatch } />
    </Route>
  </Router>
), document.getElementById('react-app'));
