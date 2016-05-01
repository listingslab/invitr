import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './Nav.css';
import appState from '../../state/app';
import localise from '../../localisation/localisation';
import LocaleFlags from '../LocaleFlags/LocaleFlags';
import NavLogin from '../NavLogin/NavLogin';
import NavHost from '../NavHost/NavHost';
import NavGuest from '../NavGuest/NavGuest';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			help: 'help'
		};
	}

	render() {
		return (
			<div className={ styles.Nav }>
				<div className="masthead clearfix">
	            <div className="inner">
	              <div className="masthead-brand">
	              	<LocaleFlags flagClick={ this.props.localeChanger }/>
	              </div>
	              <nav>
	                <ul className="nav masthead-nav">
	                	<li><Link to="/who"> { localise('nav_who') }</Link></li>
						<li><Link to="/what">{ localise('nav_what') }</Link></li>
 						<li><Link to="/when">{ localise('nav_when') }</Link></li>
						<li><Link to="/where">{ localise('nav_where') }</Link></li>
	                </ul>
	              </nav>
	            </div>
	          </div>
			</div>
		);
	}
}
