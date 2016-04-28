import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import styles from './Navigation.css';
import appState from '../../state/app';
import localise from '../../localisation/localisation';
import LocaleFlags from '../LocaleFlags/LocaleFlags';

export default class Navigation extends React.Component {

	constructor(props) {
		super(props);
	}

	dropdown (){
		let brand = `<Link className="navbar-brand active" to="/">Invitr</Link>`;
		let dd = ``;
	}

	render() {
		console.log(this.props.path);
		return (

			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
				<LocaleFlags flagClick={ this.props.localeChanger }/>

				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					
				</div>
				<div id="navbar" className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li>
							<Link to="/who"> { localise('nav_who') }</Link>
						</li>
						<li>
							<Link to="/what">{ localise('nav_what') }</Link>
						</li>
 						<li>
 							<Link to="/when">{ localise('nav_when') }</Link>
 						</li>
						<li>
							<Link to="/where">{ localise('nav_where') }</Link>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a href="#" 
								className="dropdown-toggle" 
								data-toggle="dropdown" 
								role="button" 
								aria-haspopup="true" 
								aria-expanded="false">Host 
								<span className="caret"></span></a>

							<ul className="dropdown-menu">
								<li><Link to="/host">Host</Link></li>
							</ul>
						</li>
					</ul>
				</div>
				</div>
			</nav>			
		);
	}
}