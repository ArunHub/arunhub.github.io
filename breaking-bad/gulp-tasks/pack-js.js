const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const gulp = require('gulp');
const paths = require('./paths');

function scripts() {
    return gulp.src(paths.scripts.buildOrder, { sourcemaps: true })
        .pipe(uglify({
            ie8: false,
        }))
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
};

module.exports = scripts;