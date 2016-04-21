"use strict";

function route(app, db) {
	app
		.route('/restapi')

		.all (function* (next){
			this.set('Access-Control-Allow-Origin', '*');
			this.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
			this.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
			this.set('Content-Type', 'application/json');
			yield next;
		})

		.get(function* (next) {
			this.body = {
				message:'Invitr RestAPI'
			};
			this.status = 200;
			yield next;
		})

		.post(function* (next) {
			this.body = {
				method : 'POST'
			};
			this.status = 200;
			yield next;
		})

		.nested('/:slug')

			.get(function* (next) {
				this.body = {
					method: 'GET',
					slug: this.params.slug
				};
				yield next;
			})

			.put(function* (next) {
				this.body = {
					method: 'UPDATE',
					slug: this.params.slug
				};
				yield next;
			})

			.delete(function* (next) {
				this.body = {
					method: 'DELETE',
					slug: this.params.slug
				};
				yield next;
			})
}

module.exports = route;
