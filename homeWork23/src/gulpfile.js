const { series, src, dest } = require('gulp');

function defaultTask(next) {
    console.log('Gulp here');
    next();
}

function html() {
    return src('./index.html')
    .pipe(dest('./dist/index.html'));
}

function scripts() {

}

function styles() {

}

module.exports = {
    default: defaultTask,
    build: series(html, scripts, styles)
}