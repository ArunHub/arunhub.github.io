const gulp = require('gulp');
const paths = require('./paths');
const htmlmin = require('gulp-html-minifier');

function minifyHtml() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest))
}

module.exports = minifyHtml;