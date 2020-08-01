const gulp = require('gulp');

function copyFonts() {
   return gulp.src('./css/fonts/*')
    .pipe(gulp.dest('./dist/css/fonts'))
}

module.exports = copyFonts;