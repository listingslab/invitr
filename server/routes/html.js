"use strict";

function route(app, db) {
	app


		// Admin section
		app.route('/admin')
			.all(function* (next) {
				this.body = 'public html/admin.html';
				yield next;
			})

		app.route('/')
			.all(function* (next) {
				this.redirect('/');
				this.body = 'public html/index.html';
				yield next;
			})
}

module.exports = route;


// // Admin section
// app.route('/admin')
// 	.all(function* (next) {
// 		this.body = 'public html/admin.html';
// 		yield next;
// 	})

// // Anything else gets routed back home
// app.route('*')
// 	.all(function* (next) {
// 		//this.set('Content-Type', 'application/html');
// 		this.redirect('/');
// 		this.body = 'public html/index.html';
// 		yield next;
// 	})

