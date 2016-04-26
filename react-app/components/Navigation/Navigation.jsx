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
		let dd = `<li className="dropdown">
					<a href="#" 
						className="dropdown-toggle" 
						data-toggle="dropdown" 
						role="button" 
						aria-haspopup="true" 
						aria-expanded="false">Admin 
						<span className="caret"></span></a>

					<ul className="dropdown-menu">
						<li><a href="#">Action</a></li>
						<li role="separator" className="divider"></li>
						<li className="dropdown-header">Nav header</li>
						<li><a href="#">Separated link</a></li>
						<li><a href="#">One more separated link</a></li>
					</ul>
				</li>`;
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
				</div>
				</div>
			</nav>			
		);
	}
}