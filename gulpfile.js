'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const webserver = require('gulp-webserver');
const coffeeify = require('coffeeify');
const babelify = require("babelify");
const eslint = require('gulp-eslint');

gulp.task('build', () => {
    runSequence(['browserify']);
});

gulp.task('browserify', () => {
    browserify('./js/app.js', {
        debug:   true,
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
    gulp.watch('./js/**/*.js', ['build', 'lint']);
});

gulp.task('server', () => {
    gulp.src('./')
        .pipe(webserver({
            host: '127.0.0.1',
            livereload: true
        })
    );
});

gulp.task('lint', () => {
    gulp.src('./js/app.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('default', ['build', 'watch', 'server', 'lint']);
