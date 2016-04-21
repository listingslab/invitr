var loki		= require('lokijs')

var db = new loki('content.json');
db.loadDatabase({}, function () {
	if (db.getCollection('settings') === null){
		var content = db.addCollection('settings');
		db.saveDatabase();
		console.log('New Loki Database created!! /content.json'.bgYellow);
	}
});