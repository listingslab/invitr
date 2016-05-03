import React from 'react';
import styles from './Home.css';
import localise from '../../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';


export default class Home extends React.Component {
	
  render() {
    return(
    	<div className={ styles.Home }>
			<img src="/img/save_the_date.png" />
		</div>
    );
  }
}
