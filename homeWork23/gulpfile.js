const { series, src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create(); 

function defaultTask(next) {
    console.log('Gulp here');
    next();
}

function html() {
    return src('./src/index.html')
        .pipe(dest('./dist'));
}

function vendorsJS() {
    return src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/simplelightbox/dist/simple-lightbox.jquery.js'
    ])
    .pipe(concat('vendors.js'))
    .pipe(dest('./dist'))
}

function scripts() {
    return src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist'));
}

function styles() {
    return src('./src/style.css')
        .pipe(dest('./dist'))
        .pipe(browserSync.stream({match: '**/*.css'}));
}

function watchFiles() {
    watch('./*.js', scripts);
    watch('./style.css', styles);
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    watch('./src/*.js', series(html, scripts,
        (next) => {browserSync.reload();
            next();
        }
    ));
    watch('./src/style.css', styles);
    }

const build = series(html, vendorsJS, scripts, styles);

module.exports = {
    default: defaultTask,
    build: build,
    dev: series(build,watchFiles),
    serve: series (build, serve)
}