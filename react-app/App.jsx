import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import appState from './state/app';
import localise from './localisation/localisation';
import styles from './App.css';
import Nav from './components/Nav/Nav';
import Debugger from './components/Debugger/Debugger';
import Footer from './components/Footer/Footer';

import Home from './views/Home/Home';
import Who from './views/Who/Who';
import What from './views/What/What';
import When from './views/When/When';
import Where from './views/Where/Where';

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
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <Nav path={ this.props.location.pathname } localeChanger={ this.changeLocale.bind(this) } />
              <div className="inner cover">
                { React.cloneElement(this.props.children, {
                  key: this.props.location.pathname
                }) }
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
    	<IndexRoute component={ Home }/>
    	<Route path="who" component={ Who } />
    	<Route path="what" component={ What } />
    	<Route path="when" component={ When } />
    	<Route path="where" component={ Where } />
    	<Route path="host" component={ Home } >
    		<IndexRoute component={ Home }/>
    		<Route path="guest-list" component={ Home } />
    	</Route>
    	<Route path="*" component={ Home } />
    </Route>
  </Router>
), document.getElementById('react-app'));
