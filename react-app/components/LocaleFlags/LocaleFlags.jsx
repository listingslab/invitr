import React from 'react';
import appState from '../../state/app';
import localise from '../../localisation/localisation';
import history from '../../state/browserHistory';

export default class LocaleFlags extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			locale: appState.locale
		}
	}

	handleClick(flag) {
		appState.locale = flag.target.id;
		//console.log(this);
		// this.setState({
		// 	locale: appState.locale
		// });
	}

	render() {
		console.log(this.state.locale);
		return (
			<locale-flags>
				<img height="10" onClick={ this.handleClick.bind(this) } id="uk" src="/img/flags/UK.png" />
				<img height="10" onClick={ this.handleClick.bind(this) } id="de" src="/img/flags/Germany.png" />
				<img height="10" onClick={ this.handleClick.bind(this) } id="zh" src="/img/flags/China.png" />
			</locale-flags>
		);
	}
}
