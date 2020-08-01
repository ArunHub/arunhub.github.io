/**
 * Reference: 
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md
 * https://css-tricks.com/combine-webpack-gulp-4/
 * https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/
 */

const gulp = require('gulp');

const protractor = require("gulp-protractor").protractor;
const Server = require('karma').Server;
const del = require('del');

const paths = require('./paths');

const minifyHtml = require('./minify-html');
const minifyImages = require('./minify-images');
const styles = require('./pack-css');
const copyFonts = require('./copy-fonts');
const scripts = require('./pack-js');
const jasmine = require('./g-jamine');
const inject = require('./inject');
const e2e = require('./e2e');
const clean = () => del(['dist']);
const serve = require('./server').serve;
const reload = require('./server').reload;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('e2e', e2e);

//unit test
gulp.task('jasmine', jasmine);

gulp.task('build', gulp.series([clean, minifyImages, styles, copyFonts, scripts, inject]))

//watch all changes
const watch = () => gulp.watch([paths.html.src, paths.scripts.src, paths.styles.src], gulp.series(reload));

gulp.task('default', gulp.series(serve, watch));
