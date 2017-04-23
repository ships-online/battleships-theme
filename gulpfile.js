'use strict';

const config = {
	ROOT_PATH: __dirname
};

const gulp = require( 'gulp' );

const utils = require( 'battleships-dev-tools/lib/utils.js' );
const relinkTasks = require( 'battleships-dev-tools/lib/tasks/relink.js' )( config );
const lintTasks = require( 'battleships-dev-tools/lib/tasks/lint.js' )( config );
const testTasks = require( 'battleships-dev-tools/lib/tasks/test.js' )( config );

const options = utils.parseArgs( process.argv.slice( 3 ) );

gulp.task( 'relink', relinkTasks.relink );

gulp.task( 'lint', lintTasks.lint );
gulp.task( 'pre-commit', lintTasks.lintStaged );

// JS unit tests.
gulp.task( 'test', ( done ) => testTasks.test( options, done ) );
