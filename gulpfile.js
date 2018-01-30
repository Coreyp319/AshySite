const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
const cssnano = require('gulp-cssnano');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('imageMin', () =>
    gulp.src('img/Portfolio/final/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
// gulp.task('uglifycss', function() {
//   gulp.src('src/css/*.css')
//   .pipe(uglify())
//   .pipe(gulp.dest('dist/css'))
// });
gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});
// gulp.task('minify', function(){
//   gulp.src('src/js/*.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('dist/js'))
//
// });
