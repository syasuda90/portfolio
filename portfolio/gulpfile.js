var gulp         = require('gulp'),
    gulputil     = require('gulp-util'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin       = require('gulp-cssmin');

// sass build
gulp.task('build', function () { 
  gulp.src('./shared/css/scss/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  // .pipe(cssmin())
  .pipe(gulp.dest('./shared/css'));
});

// watch
gulp.task('watch', function () {
  gulp.watch('./shared/css/scss/*/*.scss', ['build']);
});