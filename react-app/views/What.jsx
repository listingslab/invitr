import React from 'react';
import localise from '../localisation/localisation';

export default class What extends React.Component {

  render() {
    return(
      <div className="container">
        <h1>{ localise('nav_what') }</h1>
      </div>
    );
  }
}
