function e2e(done) {
    return gulp.src(__dirname + './e2e/')
        .pipe(protractor({
            configFile: paths.e2e.configPath,
            args: ['--baseUrl', paths.e2e.hostUrl]
        }))
        .on('error', function (e) { throw e })
}

module.exports = e2e;