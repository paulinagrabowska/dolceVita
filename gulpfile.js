const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('serve', ['sass'], function(){
    browserSync({
        server: 'src'
    })
    gulp.watch('src/*.html', ['reload']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('src/js'))
});

gulp.task('default', ['serve']);
