var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

var css = 'app/**/*.css';
var js = ['app/app.js', 'app/lib/**/*.js'];
var html = ['app/index.html'];
var assets = 'app/assets/**';

gulp.task('css', function () {
    gulp.src(css).pipe(livereload());
});

gulp.task('js', function () {
    gulp.src(js).pipe(livereload());
});

gulp.task('html', function () {
    gulp.src(html).pipe(livereload());
});

gulp.task('assets', function () {
    gulp.src(assets).pipe(livereload());
});

gulp.task('watch', function () {
    connect.server({
        port: 4000,
        root: 'app',
        livereload: true
    });
    livereload.listen({
        start: true
    });
    gulp.watch(css, ['css']);
    gulp.watch(js, ['js']);
    gulp.watch(html, ['html']);
    gulp.watch(assets, ['assets']);
});