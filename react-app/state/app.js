/**
 * App State Variables
 */
let apiUrl = '/api';

if (window.location.port === '1968') {
	apiUrl = 'http://localhost:1975/api';
}

export default {
	apiUrl:apiUrl,
	loggedIn: false,
	locale: 'en'
};