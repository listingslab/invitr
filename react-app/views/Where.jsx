import React from 'react';
import localise from '../localisation/localisation';

export default class Where extends React.Component {

  render() {
    return(
    	<div className="container">
			<div className="page-header">
				<h1>{ localise('nav_where') }</h1>
			</div>
			<p className="lead">Adelaide Zoo!</p>
			<p>And then on somewhere else for the reception</p>
		</div>
    );
  }
}
