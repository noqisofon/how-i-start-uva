'use strict';
var path = require( 'path' );
var gulp = require( 'gulp' );
var logger = require( 'gulp-logger' );
var filter = require( 'gulp-filter' );
var lessc = require( 'gulp-less' );

var LESS_DIR = 'bower_components/normalize-less';
var CSS_DIR = 'assets/styles';

gulp.task( 'less', function () {
    gulp.src( path.join( LESS_DIR, '**/*.less' ), { base: LESS_DIR } )
        .pipe( filter( [ '*', '!**/_*.less' ] ) )
        .pipe( lessc() )
        .pipe( gulp.dest( CSS_DIR ) )
        .pipe( logger( { beforeEach: '[less] wrote: ' } ) );
} );
