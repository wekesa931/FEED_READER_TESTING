/*eslint-disable */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
    console.log('Hello Zell');
  });

  gulp.task('styles', function(){
    return gulp.src('indexfolder/sass/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('indexfolder/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });
  gulp.task('watch',['browserSync', 'styles'], function(){
    gulp.watch('indexfolder/sass/**/*.scss', ['styles']); 
    gulp.watch('indexfolder/*.html', browserSync.reload); 
    gulp.watch('indexfolder/js/**/*.js', browserSync.reload); 
    // Other watchers
  })
  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'indexfolder'
      },
    })
  })