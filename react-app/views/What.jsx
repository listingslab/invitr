import React from 'react';
import localise from '../localisation/localisation';

export default class What extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="page-header">
				<h1>{ localise('nav_what') }</h1>
			</div>
			<p className="lead">We're getting married</p>
			<p>In a fun ceremony</p>
		</div>
    );
  }
}
