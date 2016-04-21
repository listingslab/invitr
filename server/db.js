var loki		= require('lokijs')

var db = new loki('loki.json');

db.loadDatabase({}, function () {
	if (db.getCollection('settings') === null){
		var content = db.addCollection('settings');
		db.saveDatabase();
		console.log('New Loki Database created!! /loki.json'.bgYellow);
	}
});