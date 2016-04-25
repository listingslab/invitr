import React from 'react';
import localise from '../localisation/localisation';

export default class Who extends React.Component {
	
  render() {
    return(
      <div className="container">
        <h1>{ localise('nav_who') }</h1>
      </div>
    );
  }
}
