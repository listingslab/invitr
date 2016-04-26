import React from 'react';
import localise from '../localisation/localisation';

export default class What extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="page-header">
				<h1>{ localise('nav_what') }</h1>
			</div>
			<p className="lead">Lead para</p>
			<p>Two para</p>
		</div>
    );
  }
}
