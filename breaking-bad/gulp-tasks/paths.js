const paths = {
    scripts: {
        src: './js/**/*.js',
        buildOrder: ['./js/modernizr.js', './js/smoke-emitter.js', './js/json.js', './js/script.js'],
        dest: './dist/js'
    },
    styles: {
        src: './css/*.css',
        buildOrder: ['./css/style.css'],
        dest: './dist/css'
    },
    html: {
        src: './index.html',
        dest: './dist'
    },
    e2e: {
        hostUrl: 'http://127.0.0.1:8000',
        configPath: './protractor.config.js' 
    }
};

module.exports = paths;