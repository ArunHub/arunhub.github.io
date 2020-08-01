const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function minifyImages() {
    return gulp.src('./images/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('dist/images'))
}

module.exports = minifyImages;