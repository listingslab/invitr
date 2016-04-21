
/*
	Invitr Gulp Tasks
	$ gulp --silent
*/

"use strict";

const 	gulp 		= require('gulp'),
		runSequence = require('run-sequence'),
		del			= require('del'),
		colors		= require('colors');

gulp.task('task1', function () {
	console.log('Task 1'.redBG);
});

gulp.task('task2', function () {
	console.log('Task 2'.redBG);
});

gulp.task('default',function (){
	console.log('Gulping'.cyanBG);
	runSequence(
	 	'task1',
	 	'task2'
	);
	console.log('Finished Gulping'.cyanBG);
	//gulp.watch('src/html/**', ['html']);
});

