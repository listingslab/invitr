import React from 'react';
import appState from '../../state/app';
import localise from '../../localisation/localisation';
import history from '../../state/browserHistory';

export default class LocaleFlags extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<locale-flags>
				<img height="15" onClick={ this.props.flagClick } id="en" src="/img/flags/UK.png" />
				<img height="15" onClick={ this.props.flagClick } id="de" src="/img/flags/Germany.png" />
				<img height="15" onClick={ this.props.flagClick } id="zh" src="/img/flags/China.png" />
			</locale-flags>
		);
	}
}
