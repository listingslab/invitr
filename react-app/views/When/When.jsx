import React from 'react';
import localise from '../../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class When extends React.Component {

  render() {
    return(
    	<div>
			<h1 className="cover-heading">{ localise('nav_when') }</h1>
		</div>
    );
  }
}
