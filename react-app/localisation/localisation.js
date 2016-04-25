import localeKeys from './localisation.csv';
import appState from '../state/app';

let dictionary = {};
localeKeys.forEach(key => {
	dictionary[key.id] = {
		id: key.id,
		en: key.en,
		de: key.de,
		zh: key.zh
	};
});

export default (wordId) => {
	return dictionary[wordId][appState.locale] || `*${wordId}*`;
};