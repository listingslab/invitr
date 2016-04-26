import React from 'react';
import localise from '../localisation/localisation';

export default class Who extends React.Component {
	
  render() {
    return(
    	<div className="container">
			<div className="page-header">
				<h1>{ localise('nav_who') }</h1>
			</div>
			<p className="lead">Danni Bament &amp; Chris Dorward</p>
			<p>With special guest stars, Monkey Fred &amp; Dorinda</p>
			<p>Also... Joshua, Ben, Oliver, Milly, Karen, Caroline, Gisela
			Stewart, Aidan, Christoph, Jeff, Sue, Jason, Adam, Michelle</p>
		</div>
    );
  }
}
