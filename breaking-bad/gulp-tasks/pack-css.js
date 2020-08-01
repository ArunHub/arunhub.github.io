const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const concat = require('gulp-concat');
const paths = require('./paths');

function styles() {
    return gulp.src(paths.styles.buildOrder)
    .pipe(concat('style.css'))
    .pipe(cssnano({
        discardDuplicates: true,
        discardEmpty: true
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

module.exports = styles;