'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var del = require('del');
var debug = require('gulp-debug');


gulp.task('sass',function () {
  return gulp.src('wordsreal/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/css'))
})
gulp.task('serve', function() {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
})

gulp.task('assets', function() {
    return gulp.src('wordsreal/index.html', {
            since: gulp.lastRun('assets')
        })
        .pipe(debug({
            title: "assets"
        }))
        .pipe(gulp.dest('public'))
})

gulp.task('clean', function() {
    return del('public');
});
gulp.task('build', gulp.series('clean','sass','assets'))

gulp.task('watch',function () {
  gulp.watch('wordsreal/sass/**/*.scss', gulp.series('sass'));
})



gulp.task('run',
    gulp.series('build', gulp.parallel('watch','serve')));
