import React from 'react';
import styles from './LocaleFlags.css';
import appState from '../../state/app';
import localise from '../../localisation/localisation';

export default class LocaleFlags extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={ styles.LocaleFlags }>


				<img onClick={ this.props.flagClick } id="en" src="/img/flags/UK.png" />
				<img onClick={ this.props.flagClick } id="de" src="/img/flags/Germany.png" />
				<img onClick={ this.props.flagClick } id="zh" src="/img/flags/China.png" />
			
				<another>sjdud</another>
				
			</div>
		);
	}
}
