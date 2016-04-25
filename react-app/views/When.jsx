import React from 'react';
import localise from '../localisation/localisation';

export default class When extends React.Component {

  render() {
    return(
      <div className="container">
        <h1>{ localise('nav_when') }</h1>
      </div>
    );
  }
}
