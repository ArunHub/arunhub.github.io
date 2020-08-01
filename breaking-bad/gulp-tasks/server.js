let browserSync = require('browser-sync');

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: './'
        }
    });
    done();
}

const server = browserSync.create();

module.exports = {
    reload: reload,
    serve: serve
}