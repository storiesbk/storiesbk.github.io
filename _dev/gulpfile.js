'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('../css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('js', function(){
  return gulp.src([
    './node_modules/jquery/dist/jquery.js',
    // './node_modules/bootstrap/dist/js/bootstrap.js', We're not using it
    './js/stories.js'
  ])
    .pipe(concat('stories.js'))
    .pipe(gulp.dest('../js'))
})

gulp.task('js:watch', function(){
  gulp.watch('./js/**/*.js', ['js'])
})

gulp.task('watch', ['js:watch', 'sass:watch'])

gulp.task('default', ['sass']);