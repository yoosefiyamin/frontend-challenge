// Build Dependencies
const browserify = require('browserify'),
    uglify = require('gulp-uglify');

// Style Dependencies
const sass = require('gulp-sass');

// Development Dependencies
const streamify = require('gulp-streamify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    gulp = require("gulp");
    browsersync = require('browser-sync').create();

// Html Dependencies
const htmlmin = require('gulp-htmlmin'),
    stringify = require('stringify');


// BrowserSync
function sync() {
    browsersync.init({
        server: {
            baseDir: "./dist",
            index: "/index.html",
        },
        port: 3001,
        ui: false
    });
}

function htmls() {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
}

// CSS task
function css() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
}

/* SCRIPTS */
function scripts() {
    return (
        browserify({
            entries: 'app/js/app.js'
        })
        .transform(stringify(['.html']))
        .bundle()
        .on("error", function (err) {
            console.log(err)
        })
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream())
        );
};

const js = gulp.series(scripts, htmls);

// Watch files
function watchFiles() {
    gulp.watch('app/scss/**/*.scss', css);
    gulp.watch('app/**/*.html', js);
    gulp.watch('app/js/**/*.js', js);
}

// define complex tasks
const build = gulp.parallel(css, js);
const watch = gulp.series(build, gulp.parallel(watchFiles, sync));

// export tasks
exports.css = css;
exports.htmls = htmls;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = build;