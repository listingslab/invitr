/**
 * Implementation of Google Maps
 */

import styles from './GoogleMap.css';
import React from 'react';
import Places from '../../state/places';

let API_KEY = 'AIzaSyBclwRWx_CWJn_GFkYSmkHW0UQSLUyfnfo';

window.initMap = function() {
	let event = new Event('gotGoogle');
	this.dispatchEvent(event);
};

export default class GoogleMap extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			places: Places
		};
		if (window.google === undefined){
			this.loadMapsAPI();
		}
	}

	loadMapsAPI() {
		let script = document.createElement('script');
		let scriptURL = 'https://maps.googleapis.com/maps/api/js?key=' + API_KEY + '&callback=initMap';
	    script.type = 'text/javascript';
	    document.getElementsByTagName('head')[0].appendChild(script);
	    script.src = scriptURL;
		window.addEventListener('gotGoogle', this.initMap, false);
	}

	initMap() {
		window.removeEventListener('gotGoogle', this.initMap, false);
		//console.log('go go go');
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: -35.103704,
				lng: 139.145014
			},
			zoom: 7
		});
	}

	changePlace(place) {

	}
	
	render() {
		return (
			<div className={ styles.GoogleMap }>
				<places>
				{
					this.state.places.map((place) =>
						<place>
							{ place.placeName }
						</place>
					) 				
				}
				</places>
				<map id="map"></map>
				<div className="clearfix"></div>
			</div>

		);
	}
}
