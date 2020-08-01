const gulp = require('gulp');
const jasmineBrowser = require('gulp-jasmine-browser');

function jasmine() {
    return gulp.src(['test/**/*.js'])
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({ port: 8888 }));
}

module.exports = jasmine;