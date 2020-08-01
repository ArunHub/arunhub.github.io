const gulp = require('gulp');
const inject = require('gulp-inject');
const paths = require('./paths');
const htmlmin = require('gulp-html-minifier');

function injectIn() {
    let target = gulp.src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }));
    
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    let sources = gulp.src(['./dist/js/*.js', './dist/css/*.css'], { read: false }, {relative: true});       
    return target.pipe(inject(sources))
        .pipe(gulp.dest('./dist'));
}

module.exports = injectIn;