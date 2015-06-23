/**
 * gulp
 * $ npm install gulp gulp-livereload gulp-watch gulp-sass gulp-rename gulp-plumber gulp-browserify --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename');

// Js
gulp.task('js', function () {
  gulp.src('js/main.js')
      .pipe(browserify({ debug: true }))
      .pipe(rename('dist/bundle.js'))
      .pipe(gulp.dest('./'));
});

// Sass
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
           .pipe(plumber())
           .pipe(sass())
           .pipe(gulp.dest('css'));
});

// Watch
gulp.task('watch', function () {

    // Watch `html`
    gulp.watch(['*.html', 'css/*.css', 'dist/bundle.js']).on('change', livereload.changed);

    // Watch `scss` files
    gulp.watch('sass/*.scss', ['sass']);

    gulp.watch('js/*.js', ['js']);
    
    // Create liveReload server
    livereload.listen();

});