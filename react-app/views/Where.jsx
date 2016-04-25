import React from 'react';
import localise from '../localisation/localisation';

export default class Where extends React.Component {

  render() {
    return(
      <div className="container">
        <h1>{ localise('nav_where') }</h1>
      </div>
    );
  }
}
