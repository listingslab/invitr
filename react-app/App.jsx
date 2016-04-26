import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import appState from './state/app';
import styles from './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Who from './views/Who';
import What from './views/What';
import When from './views/When';
import Where from './views/Where';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			locale: appState.locale
		};
	}

	changeLocale(flag) {
		// console.log('changeLocale(' + flag.target.id + ')');
		appState.locale = flag.target.id;
		this.setState( {
			locale: appState.locale
		});
	}

	render() {
		return (
			<div className={ styles.App }>
				<Navigation path={ this.props.location.pathname } localeChanger={ this.changeLocale.bind(this) } />
					{ React.cloneElement(this.props.children, {
						key: this.props.location.pathname
			      	}) }
		      	<Footer/>
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
    </Route>
  </Router>
), document.getElementById('react-app'));
