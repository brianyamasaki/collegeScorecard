"use strict";
/* global require */

var gulp = require('gulp'),
  rimraf = require('gulp-rimraf'), // this succeeds gulp-clean
  concat = require('gulp-concat'),
  less = require('gulp-less'),
  uglify = require('gulp-uglifyjs'),
  jshint = require('gulp-jshint'),
  rename = require('gulp-rename'),
  jade = require('gulp-jade'),
  stylish = require('jshint-stylish');

var app = {
  cleanTarget: [
    'build/*.js',
    'build/css/*.css',
    'build/img/**/*',
    'build/fonts/*',
    'build/index.html',
    'build/**/*'
  ],
  copy: {
    index: ['app/index.html', 'app/.htaccess'],
    img: ['app/img/**/*.jpg', 'client/app/img/**/*.png'],
    fonts: ['app/bower_components/bootstrap/fonts/*'],
    partials: ['app/*.html', 'app/*/*.html']
  },
  jadeSrc: [
    'app/**/*.jade' ],
  less: [
    'app/bower_components/bootstrap/dist/css/bootstrap.css',
    'app/app.less',
    'app/components/**/*.less'
  ],
  appJs: [
    'app/app.js',
    'app/view1/*.js',
    'app/view2/*.js',
    'app/components/**/*.js',
    '!app/**/*_test.js'
  ],
  appJsLib: [
    'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
    'app/bower_components/lodash/lodash.js',
    'app/bower_components/jquery/dist/jquery.js',
    'app/bower_components/d3/d3.js',
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-route/angular-route.js',
    'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    'app/bower_components/angular-simple-logger/dist/angular-simple-logger.js',
    'app/bower_components/angular-google-maps/dist/angular-google-maps.js'
  ]
};

gulp.task('jade', function() {
  return gulp.src(app.jadeSrc)
    .pipe(jade())
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return gulp.src(app.cleanTarget, {read:false})
    .pipe(rimraf());
});

gulp.task('lint', function() {
  gulp.src(['gulpfile.js'].concat(app.appJs))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('copy', function() {
  // copy files to build directory
  gulp.src(app.copy.index)
    .pipe(gulp.dest('build'));
  gulp.src(app.copy.img, {base: 'app/img'})
    .pipe(gulp.dest('build/img'));
  gulp.src(app.copy.fonts)
    .pipe(gulp.dest('build/fonts'));
  gulp.src(app.copy.partials, {base: 'app/components'})
    .pipe(gulp.dest('build/components'));
});

gulp.task('concatJs', function() {
  gulp.src(app.appJs)
    .pipe(concat('appJs.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('minifyJs', function() {
  gulp.src(app.appJs)
    .pipe(uglify('appJs.js', {outSourceMap: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('concatJsLib', function() {
  gulp.src(app.appJsLib)
    .pipe(concat('appLib.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('minifyJsLib', function() {
  gulp.src(app.appJsLib)
    .pipe(uglify('appLib.js', {outSourceMap: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('less', function() {
  gulp.src(app.less)
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('jshint', function() {
  gulp.src(app.appJs)
    .pipe(jshint())
    .pipe(jshint.reporter());
})

gulp.task('watch', function() {
  var copyFiles = app.copy.index.concat(app.copy.img).concat(app.copy.fonts).concat(app.copy.partials);
  gulp.watch(app.appJs.concat(['gulpfile.js']), ['jshint']);
  gulp.watch(app.less, ['less']);
  gulp.watch(app.appJs, ['jshint','concatJs']);
  gulp.watch(app.appJsLib, ['concatJsLib']);
  gulp.watch(app.jadeSrc, ['jade']);
  gulp.watch(copyFiles, ['copy']);
});

gulp.task('default', ['jade', 'copy', 'concatJs', 'concatJsLib', 'less']);

gulp.task('production', ['jade', 'copy', 'minifyJs', 'minifyJsLib', 'less']);