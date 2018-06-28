const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const cssnano = require('gulp-cssnano');
const useref = require('gulp-useref');
var gulpIf = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
// const minifier = require('html-minifier')


gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('imageMin', () =>
    gulp.src('img/CPportfolio/Portfolio/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/cp-port'))
);

gulp.task('autoprefixer', () =>
  gulp.src('css/*.css')
  .pipe('gulp-autoprefixer'('css/*.css'))
  .pipe(gulp.dest('dist/css'))
);

gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpIf('js/*.js', uglify()))
    .pipe(gulp.dest('dist/js'))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('css/*.css', cssnano()))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('index.html', ['imageMin']); 
  // Other watchers
  gulp.watch('css/main.css', ['gulp-autoprefixer','cssnano',]);
 // gulp.watch(useref,'js/main.js' []); 
 gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 
});



//gulp.task('deploySite', []