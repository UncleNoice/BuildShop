const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemap = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile' , function(){
    return gulp.src('./web/style/scss/**/main.scss')
    .pipe(sourcemap.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./web/style/css/'))
});

gulp.task('watch', function(){
    gulp.watch('./web/style/scss/**/*', gulp.series('sass-compile'))
});
