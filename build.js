const browserify = require('browserify');
const babelify = require('babelify');

browserify()
    .add('resources/js/app.js')
    .transform(babelify)
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(process.stdout);