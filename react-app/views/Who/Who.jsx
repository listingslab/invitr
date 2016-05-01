import React from 'react';
import styles from './Who.css';
import localise from '../../localisation/localisation';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Who extends React.Component {
	
  render() {
    return(
    	<div className={ styles.Who }>
			<h1 className="cover-heading">{ localise('nav_who') }</h1>
			

			<p>
				<img src="/img/people/Dorinda.png" align="left" />
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Morbi maximus eros ut nunc maximus placerat. Class aptent 
				taciti sociosqu ad litora torquent per conubia nostra, 
				per inceptos himenaeos. Curabitur eget fringilla lectus. 
				Praesent a purus fringilla, dignissim neque ac, luctus velit. 
				Aenean ultrices rutrum venenatis. Aenean sit amet eleifend 
				ligula, eu pharetra nunc. Donec vestibulum ornare mi ac 
				semper. Curabitur interdum congue justo. In ut fermentum 
				urna. Donec nec ipsum ac libero mollis sagittis a a tortor. 
				Donec nec lectus vestibulum, lobortis orci ut, ultrices 
				nibh. Nulla facilisi.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Morbi maximus eros ut nunc maximus placerat. Class aptent 
				taciti sociosqu ad litora torquent per conubia nostra, 
				per inceptos himenaeos. Curabitur eget fringilla lectus. 
				Praesent a purus fringilla, dignissim neque ac, luctus velit. 
				Aenean ultrices rutrum venenatis. Aenean sit amet eleifend 
				ligula, eu pharetra nunc. Donec vestibulum ornare mi ac 
				semper. Curabitur interdum congue justo. In ut fermentum 
				urna. Donec nec ipsum ac libero mollis sagittis a a tortor. 
				Donec nec lectus vestibulum, lobortis orci ut, ultrices 
				nibh. Nulla facilisi.
			</p>
		</div>
    );
  }
}
