const { series, src, dest } = require('gulp');
const concat = require('gulp-concat');

function defaultTask(next) {
    console.log('Gulp here');
    next();
}

function html() {
    return src('./index.html')
        .pipe(dest('./dist/index.html'));
}

function scripts() {
    console.log('building scripts');
    return src('./src/**/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('./dist'));
}

function styles(next) {
    console.log('styles building');
    next();
}

module.exports = {
    default: defaultTask,
    build: series(html, scripts, styles)
}